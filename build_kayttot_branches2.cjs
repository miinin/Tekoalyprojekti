const main = [{top:93.7,left:14.0},{top:88.6,left:15.7},{top:86.7,left:17.5},{top:84.9,left:20.8},{top:81.7,left:25.6},{top:80.1,left:28.2},{top:79.0,left:29.5},{top:76.2,left:31.7},{top:75.1,left:34.0},{top:74.6,left:37.5},{top:76.6,left:41.4},{top:76.7,left:44.7},{top:71.0,left:48.1},{top:68.9,left:45.8},{top:67.4,left:43.7},{top:62.7,left:42.8},{top:59.5,left:45.0},{top:55.6,left:48.4},{top:53.3,left:50.4},{top:50.6,left:52.6},{top:44.1,left:54.7}];

const b1 = [{top:88.1,left:14.8},{top:85.5,left:12.4},{top:80.2,left:10.8},{top:76.4,left:11.4},{top:71.7,left:14.2}];
const b6 = [{top:73.7,left:49.1},{top:73.9,left:51.1},{top:73.6,left:56.4},{top:72.9,left:60.4},{top:73.5,left:65.5},{top:71.7,left:69.2}];
const b4 = [{top:64.2,left:39.7},{top:62.9,left:37.7}];
const b5 = [{top:46.3,left:41.7}];

function strify(arr) {
  return '[' + arr.map(p => '{top:"' + p.top.toFixed(1) + '%",left:"' + p.left.toFixed(1) + '%"}').join(',') + ']';
}

const paths = {
  'kayttotaidot_1-kayttotaidot_jun_1': strify([...b1.slice().reverse(), main[1]]), // 1 to jun_1
  'kayttotaidot_jun_1-kayttotaidot_2': strify(main.slice(1, 5)), // jun_1 to 2
  'kayttotaidot_2-kayttotaidot_3': strify(main.slice(4, 12)), // 2 to 3
  'kayttotaidot_3-kayttotaidot_jun_6': strify(main.slice(11, 13)), // 3 to jun_6
  'kayttotaidot_jun_6-kayttotaidot_6': strify([main[12], ...b6]), // jun_6 to 6
  'kayttotaidot_jun_6-kayttotaidot_jun_4': strify(main.slice(12, 16)), // jun_6 to jun_4
  'kayttotaidot_jun_4-kayttotaidot_4': strify([main[15], ...b4]), // jun_4 to 4
  'kayttotaidot_jun_4-kayttotaidot_jun_5': strify(main.slice(15, 18)), // jun_4 to jun_5
  'kayttotaidot_jun_5-kayttotaidot_5': strify([main[17], ...b5]), // jun_5 to 5
  'kayttotaidot_jun_5-kayttotaidot_7': strify(main.slice(17, 21)) // jun_5 to 7 (now index 20)
};

const nodes = [
  "{ id: 'kayttotaidot_1', top: '71.7%', left: '14.2%' }",
  "{ id: 'kayttotaidot_2', top: '81.7%', left: '25.6%' }",
  "{ id: 'kayttotaidot_3', top: '76.7%', left: '44.7%' }",
  "{ id: 'kayttotaidot_6', top: '71.7%', left: '69.2%' }",
  "{ id: 'kayttotaidot_4', top: '62.9%', left: '37.7%' }",
  "{ id: 'kayttotaidot_5', top: '46.3%', left: '41.7%' }",
  "{ id: 'kayttotaidot_7', top: '44.1%', left: '54.7%' }",
  "{ id: 'kayttotaidot_jun_1', top: '88.6%', left: '15.7%', isJunction: true }",
  "{ id: 'kayttotaidot_jun_6', top: '71.0%', left: '48.1%', isJunction: true }",
  "{ id: 'kayttotaidot_jun_4', top: '62.7%', left: '42.8%', isJunction: true }",
  "{ id: 'kayttotaidot_jun_5', top: '55.6%', left: '48.4%', isJunction: true }"
];

const exit = strify([...main].reverse());

let out = `    kayttotaidot: {\n      entry: ${strify(main.slice(0, 2))},\n      exit: ${exit},\n      nodes: [\n`;
out += nodes.map(n => '        ' + n).join(',\n');
out += `\n      ],\n      paths: {\n`;
out += Object.keys(paths).map(k => `        '${k}': ` + paths[k]).join(',\n');
out += `\n      }\n    },`;
require('fs').writeFileSync('kayttotaidot_payload3.js', out);
console.log('Done');
