const route = [{top:86.3,left:16.9},{top:84.7,left:13.5},{top:81.2,left:11.3},{top:77.5,left:11.3},{top:74.3,left:13.8},{top:70.1,left:15.5},{top:67.7,left:13.8},{top:85.6,left:19.3},{top:84.7,left:21.9},{top:83.4,left:23.6},{top:79.1,left:28.2},{top:76.6,left:30.8},{top:75.7,left:33.2},{top:74.2,left:36.6},{top:75.3,left:39.7},{top:76.1,left:43.2},{top:73.9,left:46.2},{top:68.2,left:45.0},{top:65.4,left:41.8},{top:63.5,left:38.8},{top:60.2,left:35.7},{top:62.7,left:43.0},{top:60.1,left:44.7},{top:56.7,left:46.7},{top:50.8,left:47.2},{top:48.9,left:45.7}];
// Previous route ended at node 5 ^
// Let's add the bridge:
const bridge = [{top:62.3,left:47.5},{top:62.7,left:48.2},{top:62.9,left:48.9},{top:63.5,left:49.7},{top:64.2,left:50.8},{top:64.3,left:51.7},{top:64.4,left:53.1},{top:64.4,left:53.9},{top:64.5,left:54.8},{top:65.0,left:57.2},{top:65.1,left:58.1},{top:65.0,left:59.0},{top:64.5,left:62.0},{top:62.8,left:63.4},{top:61.6,left:64.9},{top:60.7,left:65.8}];

const oldRouteAfterNode5 = [{top:51.4,left:51.0},{top:50.7,left:52.3},{top:72.0,left:49.2},{top:72.0,left:53.3},{top:72.5,left:56.4},{top:72.3,left:61.4},{top:70.8,left:65.7},{top:67.0,left:69.2}];

// User's points:
const n5 = {top:48.9,left:45.7};
const finaali = {top:43.9,left:54.9}; // NEW FINAALI
const tavarat = {top:67.0,left:69.2};

// We want to construct paths for:
// n5 -> finaali
// finaali -> tavarat

// How does Finaali connect to Bridge? 
function dist(p1, p2) { return (p1.top-p2.top)**2 + (p1.left-p2.left)**2; }
console.log('Dist n5 to Finaali:', dist(n5, finaali));
console.log('Dist Finaali to Bridge Start:', dist(finaali, bridge[0]));
console.log('Dist Finaali to Bridge End:', dist(finaali, bridge[bridge.length-1]));
console.log('Dist n5 to Bridge Start:', dist(n5, bridge[0]));
console.log('Dist n5 to Bridge End:', dist(n5, bridge[bridge.length-1]));

console.log('Dist Bridge Start to Tavarat:', dist(bridge[0], tavarat));
console.log('Dist Bridge End to Tavarat:', dist(bridge[bridge.length-1], tavarat));

// How to connect?
// Maybe the user wants n5 -> Finaali using part of old route?
// Old route had: {top:51.4,left:51.0}. Maybe n5 -> {51.4, 51.0} -> Finaali?

// Let's print out the data so we can see.
