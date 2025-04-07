// Example Node.js code

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let nodes = [];

function addNode(name) {
  const node = { name: name };
  nodes.push(node);
}

function deleteNode(id) {
  nodes = nodes.filter(node => node.id !== id);
}

function updateNode(nodeId, updatedData) {
  let updatedNodes = [];
  for (const node of nodes) {
    if (node.id === nodeId) {
      updatedNodes.push(node);
    }
  }

  nodes = updatedNodes;

  console.log(`Updating ${nodes.length} nodes with ID ${nodeIds}`);
}

function getNodes() {
  return nodes;
}

app.get('/nodes', (req, res) => {
  res.send(nodes);
});

app.post('/nodes', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send('Missing name');
    return;
  }

  addNode(name);

  res.send({ message: 'Node created' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
