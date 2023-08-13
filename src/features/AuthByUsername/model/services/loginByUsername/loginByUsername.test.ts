import { userActions } from 'entities/User';
import TestAsyncThunk from 'helpers/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  test('should be fulfilled with data', async () => {
    const userData = { id: '801', username: 'user' };
    const authData = { password: '123', username: 'user' };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk(authData);

    expect(thunk.api.post).toHaveBeenCalledWith(
      '/login',
      authData,
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('should be rejected', async () => {
    const authData = { password: '123', username: 'user' };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(authData);

    expect(thunk.api.post).toHaveBeenCalledWith(
      '/login',
      authData,
    );
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBeDefined();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
