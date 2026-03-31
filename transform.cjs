const fs = require('fs');

const content = fs.readFileSync('./src/data/questions.js', 'utf8');
const script = content.replace('export const categories =', 'const categories =') + '\nmodule.exports = categories;';
fs.writeFileSync('./tmp_data.cjs', script);

// dynamic import equivalent in commonjs for this file that we wrote
const categories = require('./tmp_data.cjs');

const newCategories = categories.map((cat, i) => {
  let qList = [...cat.questions];
  while(qList.length < 6) {
     qList = [...qList, ...cat.questions];
  }
  // Change IDs uniquely for react keys
  qList = qList.map((q, idx) => ({...q, id: q.id + '_' + Math.random().toString(36).substr(2, 5)}));

  const subcategories = [
    { id: cat.id + '_1', name: 'Taso 1: Alkeet', top: '70%', left: '20%', questions: qList.slice(0, Math.ceil(qList.length/3)) },
    { id: cat.id + '_2', name: 'Taso 2: Syvä', top: '40%', left: '50%', questions: qList.slice(Math.ceil(qList.length/3), Math.ceil(qList.length/3)*2) },
    { id: cat.id + '_3', name: 'Taso 3: Mestari', top: '20%', left: '80%', questions: qList.slice(Math.ceil(qList.length/3)*2) }
  ];
  // Wait, if I slice them to 2 each, it's not enough to test random slicing.
  // I should just use the FULL qList in each subcategory so there's always >=6.
  const fullQList = [...qList];
  
  return { 
    id: cat.id, 
    name: cat.name, 
    subcategories: [
      { id: cat.id + '_1', name: 'Taso 1: Alkeet', top: '75%', left: '25%', questions: [...fullQList].sort(()=>Math.random()-0.5) },
      { id: cat.id + '_2', name: 'Taso 2: Syvä', top: '40%', left: '50%', questions: [...fullQList].sort(()=>Math.random()-0.5) },
      { id: cat.id + '_3', name: 'Taso 3: Mestari', top: '25%', left: '80%', questions: [...fullQList].sort(()=>Math.random()-0.5) }
    ]
  };
});

const output = 'export const categories = ' + JSON.stringify(newCategories, null, 2) + ';\n';
fs.writeFileSync('./src/data/questions.js', output);
console.log('Done transforming questions.js');
