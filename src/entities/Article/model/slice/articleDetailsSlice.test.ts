import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice', () => {
  test('test service fetchArticleById.pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      error: 'error',
      isLoading: false,
      data: {},
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
      error: undefined,
      isLoading: true,
      data: {},
    });
  });

  test('test service fetchArticleById.fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      error: undefined,
      isLoading: true,
      data: {},
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled({ id: '1' }, '1', ''))).toEqual({
      isLoading: false,
      error: undefined,
      data: { id: '1' },
    });
  });

  test('test service fetchArticleById.rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      error: undefined,
      isLoading: true,
      data: {},
    };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected)).toEqual({
      error: 'error',
      isLoading: false,
      data: {},
    });
  });
});
