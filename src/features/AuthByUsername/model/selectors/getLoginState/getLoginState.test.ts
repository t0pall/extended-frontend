import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login object', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error',
        isLoading: true,
        password: '134sdfgt2',
        username: 'user',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      error: 'error',
      isLoading: true,
      password: '134sdfgt2',
      username: 'user',
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual({
      error: undefined,
      isLoading: false,
      password: '',
      username: '',
    });
  });
});
