import TestAsyncThunk from 'helpers/TestAsyncThunk/TestAsyncThunk';
import { mockArticle } from 'shared/assets/tests/mocks/mockArticle';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
  test('should be fulfilled', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockArticle }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalledWith('/articles/1', {
      params: {
        _expand: 'user',
      },
    });
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockArticle);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }));
    const result = await thunk.callThunk('foo');

    expect(thunk.api.get).toHaveBeenCalledWith('/articles/foo', {
      params: {
        _expand: 'user',
      },
    });
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
