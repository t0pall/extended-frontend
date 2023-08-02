import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface authByUsernameProps {
  username: string;
  password: string;
}

export const authByUsername = createAsyncThunk<
  User,
  authByUsernameProps,
  { rejectValue: string }
>('auth/authByUsename', async (authData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', authData);
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(i18n.t('You have entered an incorrect username or password'));
  }
});
