/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicAPI = require('./createPublicAPI');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Failed to create a [layer directory] for [${layer}/${sliceName}]`, e);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicAPI(layer, sliceName);
};
