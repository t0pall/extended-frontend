/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const firstCharToUpper = require('../helpers/firstCharToUpper');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);
  const generateCreateError = (m, e) => {
    // eslint-disable-next-line no-console
    console.error(`Failed to create a [${m}] for [${layer}/${sliceName}]`, e);
  };

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      generateCreateError('UI directory', e);
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharToUpper(sliceName);
      await fs.mkdir(resolveUIPath(componentName));
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName),
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      );
    } catch (e) {
      generateCreateError('UI component', e);
    }
  };

  await createUIDir();
  await createComponent();
};
