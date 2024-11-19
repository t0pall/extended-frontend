/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const firstCharToUpper = require('../helpers/firstCharToUpper');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharToUpper(sliceName);
  const schemaName = `${sliceName}Schema`;
  const generateCreateError = (m, e) => {
    // eslint-disable-next-line no-console
    console.error(`Failed to create a [${m}] for [${layer}/${sliceName}]`, e);
  };

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `import ${componentName} from './ui/${componentName}/${componentName}';

export { ${componentName} };
export { ${firstCharToUpper(schemaName)} } from './model/types/${schemaName}';
`,
    );
  } catch (e) {
    generateCreateError('public API', e);
  }
};
