const currentData = {
  paths: {
      'arjessa_1-arjessa_2': [],
      'arjessa_2-arjessa_3': [],
      'arjessa_2-arjessa_4': [],
      'arjessa_4-arjessa_5': [],
      'arjessa_1-arjessa_5': [],
      'arjessa_3-arjessa_6': [],
      'arjessa_5-arjessa_6': [],
      'arjessa_6-arjessa_7': []
  },
  nodes: [
        { id: 'arjessa_1' },
        { id: 'arjessa_2' },
        { id: 'arjessa_3' },
        { id: 'arjessa_4' },
        { id: 'arjessa_5' },
        { id: 'arjessa_6' },
        { id: 'arjessa_7' }
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

console.log('Path to 2:', findPath('arjessa_1', 'arjessa_2'));
console.log('Path to 3:', findPath('arjessa_1', 'arjessa_3'));
console.log('Path to 4:', findPath('arjessa_1', 'arjessa_4'));
console.log('Path to 6:', findPath('arjessa_1', 'arjessa_6'));
