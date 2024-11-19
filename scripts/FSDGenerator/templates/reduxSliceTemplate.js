/* eslint-disable @typescript-eslint/no-var-requires */
const firstCharToUpper = require('../helpers/firstCharToUpper');

module.exports = (sliceName) => {
  const typeName = `${firstCharToUpper(sliceName)}Schema`;

  return `import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${typeName}';

const initialState: ${typeName} = {

};

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {

    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticleById.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = undefined;
  //     })
  //     .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchArticleById.rejected, (state) => {
  //       state.isLoading = false;
  //       state.error = 'error';
  //     });
  // },
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;
};
