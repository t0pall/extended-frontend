import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user1' };
    const result = loginReducer(state as LoginSchema, loginActions.setUsername('usr22'));

    expect(result).toEqual({ username: 'usr22' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'sdqw425' };
    const result = loginReducer(state as LoginSchema, loginActions.setPassword('7128usdf9'));

    expect(result).toEqual({ password: '7128usdf9' });
  });

  test('test loginByUsername pending', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false, error: undefined };
    const authData = { password: '123', username: 'user' };

    const result = loginReducer(state as LoginSchema, loginByUsername.pending('', authData));

    expect(result).toEqual({ isLoading: true, error: undefined });
  });
  test('test loginByUsername fulfilled', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false, error: undefined };
    const userData = { id: '801', username: 'user' };
    const authData = { password: '123', username: 'user' };

    const result = loginReducer(state as LoginSchema, loginByUsername.fulfilled(userData, '', authData));

    expect(result).toEqual({ isLoading: false, error: undefined });
  });
  test('test loginByUsername rejected', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false, error: undefined };
    const authData = { password: '123', username: 'user' };

    const result = loginReducer(state as LoginSchema, loginByUsername.rejected(new Error('Ошибка'), '', authData));

    expect(result).toEqual({ error: 'Error', isLoading: false });
  });
});
