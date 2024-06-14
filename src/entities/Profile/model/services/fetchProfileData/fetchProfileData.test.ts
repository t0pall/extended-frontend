import TestAsyncThunk from 'helpers/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';
import { ValidateProfileError } from '../../types/Profile';

const profileData = {
  firstname: 'Игорь',
  lastname: 'Топал',
  age: '24',
  currency: Currency.RUB,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'bvbsis',
};

describe('fetchProfileData', () => {
  test('should be fulfilled', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalledWith('/profile');
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalledWith('/profile');
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
