const fs = require('fs');
const content = fs.readFileSync('src/data/questions.js', 'utf8');

// Regex to find capitalized words (at least 3 characters) that are not preceded by sentence endings or quotes at the start
const regex = /(?<![.!?>]\s+)(?<!["'‘“\n]|^)(([A-ZÄÖ][a-zäö]+)\s?)+/g;

let match;
const names = new Set();
const ignore = new Set(["AI", "ChatGPT", "Snapchat", "Google", "Tekoäly", "Autotalli", "GPS", "TikTok", "Youtube", "Instagram", "Roblox", "Minecraft", "Suomi", "Eurooppa", "Helsinki", "Siri", "Alexa", "Skenaario", "Skenaario:", "Tämä", "Miksi", "No", "Kyllä", "Koska", "Mutta", "Väärin", "Oikein", "Matkustaja", "AI van", "Kura-Kalle"]);

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check if line contains properties like "question", "options", "explanation" to avoid checking keys/code
    if (line.includes('"question":') || line.includes('"explanation":') || line.includes('"options":') || line.match(/"[^"]+":/)) {
        let m;
        while ((m = regex.exec(line)) !== null) {
            const word = m[1].trim();
            if (word.length > 2 && !ignore.has(word) && !word.toUpperCase().includes(word)) { // try to avoid all-caps or generic words
                // A very simplified heuristic to filter common capitalized non-names we might get 
                // Let's just print them with line numbers to manually review
                console.log(`Line ${i + 1}: ${word} -> Context: ${line.substring(Math.max(0, m.index - 20), Math.min(line.length, m.index + 20))}`);
            }
        }
    }
}
