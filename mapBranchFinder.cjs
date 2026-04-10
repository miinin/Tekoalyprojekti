const main = [{top:93.7,left:14.0},{top:88.6,left:15.7},{top:86.7,left:17.5},{top:84.9,left:20.8},{top:81.7,left:25.6},{top:80.1,left:28.2},{top:79.0,left:29.5},{top:76.2,left:31.7},{top:75.1,left:34.0},{top:74.6,left:37.5},{top:76.6,left:41.4},{top:76.7,left:44.7},{top:71.0,left:48.1},{top:68.9,left:45.8},{top:67.4,left:43.7},{top:62.7,left:42.8},{top:59.5,left:45.0},{top:55.6,left:48.4},{top:53.3,left:50.4},{top:50.6,left:52.6}];

const b1 = [{top:88.1,left:14.8},{top:85.5,left:12.4},{top:80.2,left:10.8},{top:76.4,left:11.4},{top:71.7,left:14.2}]; // Node 1 at end
const b6 = [{top:73.7,left:49.1},{top:73.9,left:51.1},{top:73.6,left:56.4},{top:72.9,left:60.4},{top:73.5,left:65.5},{top:71.7,left:69.2}]; // Node 6 at end
const b4 = [{top:64.2,left:39.7},{top:62.9,left:37.7}]; // Node 4 at end
const b5 = [{top:54.9,left:45.6},{top:52.8,left:45.5}]; // Node 5 at end

// Dist function
function dist(p1, p2) { return (p1.top-p2.top)**2 + (p1.left-p2.left)**2; }

// Function to find closest point on main path
function findClosest(branch) {
    let startPoint = branch[0];
    let minD = Infinity; let minI = -1;
    for(let i=0; i<main.length; i++) {
        let d = dist(startPoint, main[i]);
        if(d < minD) { minD = d; minI = i; }
    }
    return { index: minI, point: main[minI], dist: minD };
}

console.log('Branch 1 closest to Main:', findClosest(b1));
console.log('Branch 6 closest to Main:', findClosest(b6));
console.log('Branch 4 closest to Main:', findClosest(b4));
console.log('Branch 5 closest to Main:', findClosest(b5));
