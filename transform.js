const fs = require('fs');

const content = fs.readFileSync('./src/data/questions.js', 'utf8');
const script = content.replace('export const categories', 'const categories') + '\nmodule.exports = categories;';
fs.writeFileSync('./tmp_data.js', script);
const categories = require('./tmp_data.js');

const newCategories = categories.map((cat, i) => {
  // Multiply the questions so we have minimum 6 to test the shuffle/slice(5) logic
  let qList = [...cat.questions];
  while(qList.length < 6) {
     qList = [...qList, ...cat.questions];
  }

  // Generate 3 subcategories
  const subcategories = [
    { id: cat.id + '_1', name: 'Osa 1: Alkeet', top: '70%', left: '20%', questions: qList },
    { id: cat.id + '_2', name: 'Osa 2: Syventävä', top: '40%', left: '50%', questions: qList },
    { id: cat.id + '_3', name: 'Osa 3: Mestari', top: '20%', left: '80%', questions: qList }
  ];
  return { id: cat.id, name: cat.name, subcategories };
});

const output = 'export const categories = ' + JSON.stringify(newCategories, null, 2) + ';\n';
fs.writeFileSync('./src/data/questions.js', output);
console.log('Done transforming questions.js');
