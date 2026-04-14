const fs = require('fs');
const readline = require('readline');

const catMap = {
  "tekoälyn perusteet": "perusteet",
  "konepellin alla": "konepellin",
  "digiturva": "digiturva",
  "aivoterveys": "aivoterveys",
  "tekoäly arjessamme": "arjessa",
  "reilu peli (etiikka)": "reilu_peli",
  "tekoälyn käyttötaidot": "kayttotaidot"
};

async function parseG() {
  const fileContentOrig = fs.readFileSync('./src/data/questions.js', 'utf8');
  let jsonString = fileContentOrig.replace('export const categories = ', '');
  jsonString = jsonString.trim();
  if (jsonString.endsWith(';')) jsonString = jsonString.slice(0, -1);
  const categories = JSON.parse(jsonString);

  const fileStream = fs.createReadStream('./kysymyksetg.txt', 'utf8');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let currentCategory = null;
  let currentSubcategory = null;
  let currentQuestion = null;
  let currentCatId = null;

  for await (const line of rl) {
    const text = line.trim();
    if (!text) continue;

    // Detect Main Category
    const mainMatch = text.match(/^\d+\.\s+(.*?)\s+\(G\.\s*(.*?)\)/i);
    if (mainMatch) {
      const rawName = mainMatch[1].trim();
      currentCatId = catMap[rawName.toLowerCase()];
      currentCategory = categories.find(c => c.id === currentCatId);
      if(currentCategory) {
          currentSubcategory = {
              id: `${currentCatId}_7`,
              name: `G. ${mainMatch[2].trim()}`,
              questions: []
          };
          const existing = currentCategory.subcategories.findIndex(s => s.id === currentSubcategory.id);
          if (existing !== -1) {
              currentCategory.subcategories[existing] = currentSubcategory;
          } else {
              currentCategory.subcategories.push(currentSubcategory);
          }
      }
      continue;
    }

    // Detect Question (Inline question field!)
    const qMatch = text.match(/^\d+\.\s+.*?\((true_false|multiple_choice|scenario|ordering|spot_the_ai|reverse_prompt|drag_drop)\)\s+question:\s*(.*)/i);
    if (qMatch && currentSubcategory) {
      currentQuestion = {
        id: `${currentSubcategory.id}_q${currentSubcategory.questions.length + 1}`,
        type: qMatch[1].toLowerCase().trim(),
        question: qMatch[2].trim()
      };
      currentSubcategory.questions.push(currentQuestion);
      continue;
    }

    // Parse Fields (starting with *)
    if (currentQuestion) {
      if (text.startsWith('* options:')) {
        try { currentQuestion.options = JSON.parse(text.substring(10).trim()); } catch(e) { }
      } else if (text.startsWith('* correctAnswer:')) {
        let trimmed = text.substring(16).trim();
        if(trimmed.startsWith('"') && trimmed.endsWith('"') && !trimmed.startsWith('["') && !trimmed.startsWith('{"')) {
            trimmed = trimmed.substring(1, trimmed.length - 1);
        }
        try {
            if (trimmed.startsWith('{') || trimmed.startsWith('[')) { currentQuestion.correctAnswer = JSON.parse(trimmed); } 
            else { currentQuestion.correctAnswer = trimmed; }
        } catch(e) { currentQuestion.correctAnswer = trimmed; }
      } else if (text.startsWith('* explanation:')) {
        currentQuestion.explanation = text.substring(14).trim();
      } else if (text.startsWith('* draggables:')) {
        try { currentQuestion.draggables = JSON.parse(text.substring(13).trim()); } catch(e) { }
      } else if (text.startsWith('* dropZones:')) {
        try { currentQuestion.dropZones = JSON.parse(text.substring(12).trim()); } catch(e) { }
      } else {
          if (!text.startsWith('* ') && currentQuestion.explanation && !text.match(/^([A-Z]|\d+)\./) && !text.includes('Toiminta:') && !text.includes('Tarvittavat kent')) {
              currentQuestion.explanation += " " + text;
          }
      }
    }
  }

  const exportContent = `export const categories = ${JSON.stringify(categories, null, 2)};\n`;
  fs.writeFileSync('./src/data/questions.js', exportContent);
  console.log('Successfully appended G questions to questions.js');
}

parseG().catch(console.error);
