/* eslint-disable @typescript-eslint/no-var-requires */
const firstCharToUpper = require('../helpers/firstCharToUpper');

module.exports = (sliceName) => `export interface ${firstCharToUpper(sliceName)}Schema`;
