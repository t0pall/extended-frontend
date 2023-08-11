import axios from 'axios';
import { userActions } from 'entities/User';
import TestAsyncThunk from 'helpers/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const axiosMocked = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('should be fulfilled with data', async () => {
    const userData = { id: '801', username: 'user' };
    const authData = { password: '123', username: 'user' };

    axiosMocked.post.mockReturnValue(
      Promise.resolve({
        data: userData,
      }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(authData);

    expect(axiosMocked.post).toHaveBeenCalledWith(
      'http://localhost:8000/login',
      authData,
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('should be rejected', async () => {
    const authData = { password: '123', username: 'user' };

    axiosMocked.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(authData);

    expect(axiosMocked.post).toHaveBeenCalledWith(
      'http://localhost:8000/login',
      authData,
    );
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
