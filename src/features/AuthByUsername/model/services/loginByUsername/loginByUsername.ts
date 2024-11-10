import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginProps,
  ThunkConfig<string>
>('login/loginByUsename', async (authData, { rejectWithValue, dispatch, extra }) => {
  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response?.data) {
      throw new Error();
    }
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return rejectWithValue('Error occured');
  }
});
