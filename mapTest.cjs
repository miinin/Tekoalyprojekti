const route = [{top:86.3,left:16.9},{top:84.7,left:13.5},{top:81.2,left:11.3},{top:77.5,left:11.3},{top:74.3,left:13.8},{top:70.1,left:15.5},{top:67.7,left:13.8},{top:85.6,left:19.3},{top:84.7,left:21.9},{top:83.4,left:23.6},{top:79.1,left:28.2},{top:76.6,left:30.8},{top:75.7,left:33.2},{top:74.2,left:36.6},{top:75.3,left:39.7},{top:76.1,left:43.2},{top:73.9,left:46.2},{top:68.2,left:45.0},{top:65.4,left:41.8},{top:63.5,left:38.8},{top:60.2,left:35.7},{top:62.7,left:43.0},{top:60.1,left:44.7},{top:56.7,left:46.7},{top:50.8,left:47.2},{top:48.9,left:45.7},{top:51.4,left:51.0},{top:50.7,left:52.3},{top:72.0,left:49.2},{top:72.0,left:53.3},{top:72.5,left:56.4},{top:72.3,left:61.4},{top:70.8,left:65.7},{top:67.0,left:69.2}];

// Nodes as provided by the user previously
const nodes = [
  { id: 1, pos: {top: 63.8, left: 12.5} },
  { id: 2, pos: {top: 81.5, left: 25.8} },
  { id: 3, pos: {top: 75.5, left: 48.7} }, 
  { id: 4, pos: {top: 55.8, left: 34.7} },
  { id: 5, pos: {top: 45.9, left: 43.7} },
  { id: 6, pos: {top: 46.0, left: 54.5} }, // Finaali coordinates
  { id: 7, pos: {top: 63.2, left: 68.2} }  // Tavarat siististi coordinates
];

function dist(p1, p2) { return (p1.top-p2.top)**2 + (p1.left-p2.left)**2; }

nodes.forEach(n => {
  let minD = Infinity; let minI = -1;
  for(let i=0; i<route.length; i++) {
     let d = dist(n.pos, route[i]);
     if(d < minD) { minD = d; minI = i; }
  }
  console.log('Node ' + n.id + ' nearest to Route[' + minI + '] = ' + JSON.stringify(route[minI]) + ' (dist ' + minD.toFixed(1) + ')');
});
