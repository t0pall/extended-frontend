import TestAsyncThunk from 'helpers/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/Profile';

const formData = {
  firstname: 'Игорь',
  lastname: 'Топал',
  age: '24',
  currency: Currency.RUB,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'bvbsis',
};

describe('updateProfileData', () => {
  test('should be fulfilled with data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: formData }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalledWith('/profile', formData);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(formData);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalledWith('/profile', formData);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should validate data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...formData, lastname: '' },
      },
    });
    const result = await thunk.callThunk();
    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
