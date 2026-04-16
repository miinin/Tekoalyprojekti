const fs = require('fs');

let content = fs.readFileSync('src/data/questions.js', 'utf8');

const replacements = [
  // 8510
  [/sellainen tavoite \(prompti\),/g, 'sellainen tavoite tai kehote (prompti),'],
  // 9185 & 9192
  [/kehotuksen \(promptin\)/g, 'kehotteen (promptin)'],
  // 9411
  [/tarkan ohjeen \(promptin\)/g, 'tarkan kehotteen (promptin)'],
  // 9424
  [/Prompti on tekoälyn ohjauspyörä!/g, 'Kehote (prompti) on tekoälyn ohjauspyörä!'],
  // 9437
  [/tarkempaa promptia:/g, 'tarkempaa kehotetta (promptia):'],
  // 9466
  [/promptit \(ohjeet\)/g, 'kehotteet (promptit)'],
  // 9501
  [/Mikä rooliprompti/g, 'Mikä roolikehote (rooliprompti)'],
  // 9520
  [/Promptaaminen on keskustelua!/g, 'Kehotteen luominen (promptaaminen) on keskustelua!'],
  // 9525
  [/usein promptissa/g, 'usein kehotteessa (promptissa)'],
  // 9546
  [/hyvää promptausta!/g, 'hyvän kehotteen rakentamista (promptausta)!'],
  // 9551
  [/promptauksen mahtavat työkalut ja ohjeet/g, 'mahtavat kehotteen (promptin) työkalut ja ohjeet'],
  // 9567
  [/tylsän promptin aivan mestarilliseksi/g, 'tylsän kehotteen (promptin) aivan mestarilliseksi'],
  // 9576 & 9583
  [/tarkennat promptia:/g, 'tarkennat kehotetta (promptia):'],
  // 9630
  [/mestaritason promptausta ja navigointia!/g, 'mestaritason kehotteiden laatimista (promptausta) ja navigointia!'],
  // 10004
  [/Ensimmäinen prompti/g, 'Ensimmäinen kehote (prompti)'],
  // 10258
  [/tekoälyn promptiin \(ohjeeseen\)/g, 'tekoälyn kehotteeseen (promptiin)'],
  // 10306 & 10310
  [/uusi prompti:/g, 'uusi kehote (prompti):'],
  // 10644
  [/ohjeet \(promptit\)/g, 'kehotteet (promptit)'],
  // 10786
  [/ohje \(prompti\)/g, 'kehote (prompti)'],
  // 10855
  [/promptin \(ohjeen\)/g, 'kehotteen (promptin)'],
  // 10900
  [/"hakuammunta"-prompti,/g, '"hakuammunta"-kehote (prompti),']
];

let modified = content;
for (const [regex, replacement] of replacements) {
    modified = modified.replace(regex, replacement);
}

fs.writeFileSync('src/data/questions.js', modified, 'utf8');
console.log('Patch complete.');
