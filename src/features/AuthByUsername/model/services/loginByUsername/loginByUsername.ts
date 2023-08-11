import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface LoginProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginProps,
  { rejectValue: string }
>('login/loginByUsename', async (authData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', authData);
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue(`error: ${error}`);
  }
});
