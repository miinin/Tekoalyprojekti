const fs = require('fs');

const fileContent = fs.readFileSync('src/data/questions.js', 'utf8');
const scriptContent = fileContent.replace('export const categories = ', 'module.exports = ');
fs.writeFileSync('temp_questions.cjs', scriptContent, 'utf8');

const roadmapData = require('./temp_questions.cjs');
let issues = [];

const checkText = (text, context, id) => {
    if (!text || typeof text !== 'string') return;
    
    // Check for comma before "ja"
    if (/, ja\b/.test(text)) issues.push({ id, context, type: 'Pilkku ennen ja-sanaa', text: text.match(/[^.!?]*?, ja\b[^.!?]*/)[0] || text.substring(0, 50) });
    
    // Check for double spaces
    if (/  /.test(text)) issues.push({ id, context, type: 'Kaksi välilyöntiä', text: text.substring(0, 50) });
    
    // Check for multiple punctuation
    if (/\.\.(?!\.)/.test(text)) issues.push({ id, context, type: 'Kaksi pistettä (..)', text: text.substring(0, 50) });
};

roadmapData.forEach(r => r.subcategories?.forEach(s => s.questions?.forEach(q => {
    checkText(q.question, 'Kysymys', q.id);
    checkText(q.explanation, 'Perustelu', q.id);
    q.options?.forEach(o => checkText(o.item || o, 'Vaihtoehto', q.id));
    q.draggables?.forEach(d => checkText(d, 'Raahattava', q.id));
    q.dropZones?.forEach(d => checkText(d, 'Pudotusalue', q.id));
})));

let md = "# Kieliasun havainnot kysymysdatassa\n\n";

const byType = {};
issues.forEach(i => {
    if(!byType[i.type]) byType[i.type] = [];
    byType[i.type].push(i);
});

for (const type in byType) {
    if (byType[type].length === 0) continue;
    md += `## ${type} (${byType[type].length} kpl)\n`;
    byType[type].forEach(i => {
        md += `- **[${i.id}]** ${i.context}: *"...${i.text.replace(/\n/g, ' ').trim()}..."*\n`;
    });
    md += "\n";
}

fs.writeFileSync('kieliasu_havainnot.md', md, 'utf8');
fs.unlinkSync('temp_questions.cjs');
