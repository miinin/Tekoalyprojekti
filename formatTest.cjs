const fs = require('fs');

const bridge = [{top:62.3,left:47.5},{top:62.7,left:48.2},{top:62.9,left:48.9},{top:63.5,left:49.7},{top:64.2,left:50.8},{top:64.3,left:51.7},{top:64.4,left:53.1},{top:64.4,left:53.9},{top:64.5,left:54.8},{top:65.0,left:57.2},{top:65.1,left:58.1},{top:65.0,left:59.0},{top:64.5,left:62.0},{top:62.8,left:63.4},{top:61.6,left:64.9},{top:60.7,left:65.8}];

function strify(arr) {
  return '[' + arr.map(p => '{top:"' + p.top.toFixed(1) + '%",left:"' + p.left.toFixed(1) + '%"}').join(',') + ']';
}

const n5_7 = [
  {top: 48.9, left: 45.7},
  {top: 51.4, left: 51.0},
  {top: 43.9, left: 54.9}
];

const n7_6 = [
  {top: 43.9, left: 54.9},
  {top: 51.4, left: 51.0},
  ...bridge,
  {top: 67.0, left: 69.2}
];

console.log('5_7 =', strify(n5_7));
console.log('7_6 =', strify(n7_6));
console.log('exit =', strify([...n7_6].reverse()));
