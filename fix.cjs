const fs = require('fs');
let content = fs.readFileSync('src/data/questions.js', 'utf8');
content = content.replace(/"väärin"/g, '"Väärin"');
fs.writeFileSync('src/data/questions.js', content, 'utf8');
console.log("Replaced väärin");
