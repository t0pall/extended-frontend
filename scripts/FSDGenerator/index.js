/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
  console.log(`Invalid layer. It must be one of [${layers.join(', ')}]`);
} else if (!sliceName) {
  console.log('Please provide a slice name');
} else {
  createTemplate(layer, sliceName);
}
