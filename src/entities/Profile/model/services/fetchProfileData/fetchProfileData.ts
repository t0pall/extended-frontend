import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/Profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>(`/profiles/${profileId}`);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
