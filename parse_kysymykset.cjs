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

async function parseQuestions() {
  const fileStream = fs.createReadStream('./kysymykset.txt', 'utf8');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const categories = [];
  let currentCategory = null;
  let currentSubcategory = null;
  let currentQuestion = null;
  let currentCatId = null;
  let subIdx = 0;

  for await (const line of rl) {
    const text = line.trim();
    if (!text) continue;

    // Detect Main Category
    const mainMatch = text.match(/^\d+\.\s+(.*?)\s+\(p/i);
    if (mainMatch) {
      let rawName = mainMatch[1].trim();
      currentCatId = catMap[rawName.toLowerCase()] || `cat_${categories.length + 1}`;
      
      currentCategory = {
        id: currentCatId,
        name: rawName,
        subcategories: []
      };
      categories.push(currentCategory);
      subIdx = 0;
      continue;
    }

    // Detect Question start with explicit type checking
    const qMatch = text.match(/^\d+\.\s+.*?\((true_false|multiple_choice|scenario|ordering|spot_the_ai|reverse_prompt|drag_drop)\)/i);
    if (qMatch && !text.startsWith('* ')) {
      const qType = qMatch[1].toLowerCase().trim();
      currentQuestion = {
        id: `${currentSubcategory.id}_q${currentSubcategory.questions.length + 1}`,
        type: qType
      };
      currentSubcategory.questions.push(currentQuestion);
      continue;
    }

    // Detect Subcategory (e.g. A.Mikä ihmeen tekoäly? or 1. Kaikki kyytiin!)
    const subMatch = text.match(/^([A-Z]|\d+)\.\s*(.*?)$/);
    const altSubMatch = text.match(/^[A-Z]\s+(.*?)$/); // Fallback for "B Koodarin reseptikirja"
    if ((subMatch || altSubMatch) && !text.startsWith('* ') && !text.includes('Toiminta:') && !text.includes('Tarvittavat kent') && text.length < 200) {
      subIdx++;
      let rawName = (subMatch ? subMatch[2] : altSubMatch[1]).trim();
      const nameParts = rawName.split('(');
      const name = nameParts[0].trim();
      currentSubcategory = {
        id: `${currentCatId}_${subIdx}`,
        name: name,
        questions: []
      };
      if (currentCategory) {
          currentCategory.subcategories.push(currentSubcategory);
      } else {
          currentCatId = "tuntematon";
          currentCategory = { id: currentCatId, name: 'Tuntematon kategoria', subcategories: [currentSubcategory] };
          categories.push(currentCategory);
      }
      continue;
    }

    // Parse Fields (starting with *)
    if (currentQuestion) {
      if (text.startsWith('* question:')) {
        currentQuestion.question = text.substring(11).trim();
      } else if (text.startsWith('* options:')) {
        try {
          currentQuestion.options = JSON.parse(text.substring(10).trim());
        } catch(e) {
          currentQuestion.options = [];
        }
      } else if (text.startsWith('* correctAnswer:')) {
        let trimmed = text.substring(16).trim();
        if(trimmed.startsWith('"') && trimmed.endsWith('"') && !trimmed.startsWith('["') && !trimmed.startsWith('{"')) {
            trimmed = trimmed.substring(1, trimmed.length - 1);
        }
        try {
            if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
                currentQuestion.correctAnswer = JSON.parse(trimmed);
            } else {
                currentQuestion.correctAnswer = trimmed;
            }
        } catch(e) {
            currentQuestion.correctAnswer = trimmed;
        }
      } else if (text.startsWith('* explanation:')) {
        currentQuestion.explanation = text.substring(14).trim();
      } else if (text.startsWith('* draggables:')) {
        try {
          currentQuestion.draggables = JSON.parse(text.substring(13).trim());
        } catch(e) {
        }
      } else if (text.startsWith('* dropZones:')) {
        try {
          currentQuestion.dropZones = JSON.parse(text.substring(12).trim());
        } catch(e) {
        }
      } else {
          // Multiline handling
          if (!text.startsWith('* ') && currentQuestion.explanation && !text.match(/^([A-Z]|\d+)\./) && !text.includes('Toiminta:') && !text.includes('Tarvittavat kent')) {
              currentQuestion.explanation += " " + text;
          }
      }
    }
  }

  const fileContent = `export const categories = ${JSON.stringify(categories, null, 2)};\n`;
  fs.writeFileSync('./src/data/questions.js', fileContent);
  console.log('Successfully completed parsing and wrote to questions.js');
  console.log(`Categories parsed: ${categories.length}`);
}

parseQuestions().catch(console.error);
