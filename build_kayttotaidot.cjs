const route = [{top:86.3,left:16.9},{top:84.7,left:13.5},{top:81.2,left:11.3},{top:77.5,left:11.3},{top:74.3,left:13.8},{top:70.1,left:15.5},{top:67.7,left:13.8},{top:85.6,left:19.3},{top:84.7,left:21.9},{top:83.4,left:23.6},{top:79.1,left:28.2},{top:76.6,left:30.8},{top:75.7,left:33.2},{top:74.2,left:36.6},{top:75.3,left:39.7},{top:76.1,left:43.2},{top:73.9,left:46.2},{top:68.2,left:45.0},{top:65.4,left:41.8},{top:63.5,left:38.8},{top:60.2,left:35.7},{top:62.7,left:43.0},{top:60.1,left:44.7},{top:56.7,left:46.7},{top:50.8,left:47.2},{top:48.9,left:45.7},{top:51.4,left:51.0},{top:50.7,left:52.3},{top:72.0,left:49.2},{top:72.0,left:53.3},{top:72.5,left:56.4},{top:72.3,left:61.4},{top:70.8,left:65.7},{top:67.0,left:69.2}];

function strify(arr) {
  return '[' + arr.map(p => '{top:"' + p.top.toFixed(1) + '%",left:"' + p.left.toFixed(1) + '%"}').join(',') + ']';
}

const paths = {
  'kayttotaidot_1-kayttotaidot_2': strify(route.slice(6, 10)),     // 1 to 2
  'kayttotaidot_2-kayttotaidot_3': strify(route.slice(9, 17)),     // 2 to 3
  'kayttotaidot_3-kayttotaidot_4': strify(route.slice(16, 21)),    // 3 to 4
  'kayttotaidot_4-kayttotaidot_5': strify(route.slice(20, 26)),    // 4 to 5
  'kayttotaidot_5-kayttotaidot_7': strify(route.slice(25, 28)),    // 5 to 7 (Finaali at 27)
  'kayttotaidot_7-kayttotaidot_6': strify(route.slice(27, 34))     // 7 to 6 (Tavarat at 33)
};

const nodes = [
  "{ id: 'kayttotaidot_1', top: '67.7%', left: '13.8%' }",
  "{ id: 'kayttotaidot_2', top: '83.4%', left: '23.6%' }",
  "{ id: 'kayttotaidot_3', top: '73.9%', left: '46.2%' }",
  "{ id: 'kayttotaidot_4', top: '60.2%', left: '35.7%' }",
  "{ id: 'kayttotaidot_5', top: '48.9%', left: '45.7%' }",
  "{ id: 'kayttotaidot_6', top: '67.0%', left: '69.2%' }",   // Tavarat
  "{ id: 'kayttotaidot_7', top: '50.7%', left: '52.3%' }"    // Finaali
];

const entry = strify(route.slice(0, 7));
const exit = strify([...route.slice(27, 34)].reverse());

let out = `    kayttotaidot: {\n      entry: ${entry},\n      exit: ${exit},\n      nodes: [\n`;
out += nodes.map(n => '        ' + n).join(',\n');
out += `\n      ],\n      paths: {\n`;
out += Object.keys(paths).map(k => `        '${k}': ` + paths[k]).join(',\n');
out += `\n      }\n    },`;
require('fs').writeFileSync('kayttotaidot_payload.js', out);
console.log('Done');
