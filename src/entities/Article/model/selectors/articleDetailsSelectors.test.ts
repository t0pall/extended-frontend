import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetailsSelectors';

describe('articleDetailsSelectors', () => {
  const state: DeepPartial<StateSchema> = {
    articleDetails: {
      data: { id: '1' },
      error: 'error',
      isLoading: true,
    },
  };

  const emptyState: DeepPartial<StateSchema> = {};

  test('should return data', () => {
    expect(getArticleDetailsData(state as StateSchema)).toEqual({
      id: '1',
    });
  });

  test('should work with empty data', () => {
    expect(getArticleDetailsData(emptyState as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty error', () => {
    expect(getArticleDetailsData(emptyState as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty isLoading', () => {
    expect(getArticleDetailsData(emptyState as StateSchema)).toEqual(undefined);
  });
});
