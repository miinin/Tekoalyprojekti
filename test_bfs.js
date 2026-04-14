const currentData = {
  paths: {
    'perusteet_1-perusteet_jun_0': [],
    'perusteet_jun_0-perusteet_6': [],
    'perusteet_jun_0-perusteet_jun_1': [],
    'perusteet_jun_1-perusteet_jun_2': [],
    'perusteet_jun_2-perusteet_2': [],
    'perusteet_jun_2-perusteet_3': [],
    'perusteet_3-perusteet_4': [],
    'perusteet_4-perusteet_5': [],
    'perusteet_5-perusteet_7': [],
    'perusteet_7-perusteet_jun_1': []
  },
  nodes: [
    { id: 'perusteet_1' }, { id: 'perusteet_2' }, { id: 'perusteet_3' },
    { id: 'perusteet_4' }, { id: 'perusteet_5' }, { id: 'perusteet_6' },
    { id: 'perusteet_7' }, { id: 'perusteet_jun_0' }, { id: 'perusteet_jun_1' },
    { id: 'perusteet_jun_2' }
  ]
};

const mapNodes = currentData.nodes.map(n => n.id);
const subAdjacency = {};
mapNodes.forEach(id => subAdjacency[id] = []);

Object.keys(currentData.paths).forEach(pathKey => {
    const [s, e] = pathKey.split('-');
    if (subAdjacency[s] && subAdjacency[e]) {
        subAdjacency[s].push(e);
        subAdjacency[e].push(s);
    }
});

function findPath(startNode, nodeId) {
  const queue = [[startNode]];
  const visited = new Set([startNode]);
  let pathSequence = null;

  while (queue.length > 0) {
      const path = queue.shift();
      const lastN = path[path.length - 1];
      if (lastN === nodeId) {
          pathSequence = path;
          break;
      }
      for (const neighbor of (subAdjacency[lastN] || [])) {
          if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push([...path, neighbor]);
          }
      }
  }
  return pathSequence;
}

console.log('Path to 4:', findPath('perusteet_1', 'perusteet_4'));
console.log('Path to 7:', findPath('perusteet_1', 'perusteet_7'));
console.log('Path to 2:', findPath('perusteet_1', 'perusteet_2'));
console.log('Path to 5:', findPath('perusteet_1', 'perusteet_5'));
console.log('Path to 6:', findPath('perusteet_1', 'perusteet_6'));
