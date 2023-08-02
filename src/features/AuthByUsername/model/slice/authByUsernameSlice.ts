import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authByUsername } from '../services/authByUsername/authByUsername';
import { AuthByUsernameSchema } from '../types/AuthByUsernameSchema';

const initialState: AuthByUsernameSchema = {
  isLoading: false,
  password: '',
  username: '',
};

export const authByUsernameSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(authByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(authByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authByUsernameActions } = authByUsernameSlice;

export const { reducer: authByUsernameReducer } = authByUsernameSlice;
