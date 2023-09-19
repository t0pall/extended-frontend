import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/Profile';

describe('validateProfileData', () => {
  test('success', () => {
    const profileData = {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: '24',
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Moscow',
      username: 'bvbsis',
    };
    const result = validateProfileData(profileData);
    expect(result).toEqual([]);
  });

  test('incorrect lastname and firstname', () => {
    const profileData = {
      firstname: '',
      lastname: '',
      age: '24',
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Moscow',
      username: 'bvbsis',
    };
    const result = validateProfileData(profileData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should work with no-data', () => {
    const result = validateProfileData(undefined);
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('incorrect age', () => {
    const profileData = {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: undefined,
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Moscow',
      username: 'bvbsis',
    };
    const result = validateProfileData(profileData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect username', () => {
    const profileData = {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: '24',
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Moscow',
      username: '',
    };
    const result = validateProfileData(profileData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });

  test('incorrect location', () => {
    const profileData = {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: '24',
      currency: Currency.RUB,
      country: undefined,
      city: '',
      username: 'bvbsis',
    };
    const result = validateProfileData(profileData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_LOCATION]);
  });

  test('incorrect currency', () => {
    const profileData = {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: '24',
      currency: undefined,
      country: Country.Kazakhstan,
      city: 'Moscow',
      username: 'bvbsis',
    };
    const result = validateProfileData(profileData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
  });
});
