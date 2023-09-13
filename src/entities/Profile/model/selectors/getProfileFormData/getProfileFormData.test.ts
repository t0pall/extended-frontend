import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData', () => {
  test('should return formData', () => {
    const formData = {
      firstname: 'Игорь',
      lastname: 'Топал',
      age: '24',
      currency: Currency.RUB,
      country: Country.Kazakhstan,
      city: 'Москва',
      username: 'bvbsis',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData,
      },
    };

    expect(getProfileFormData(state as StateSchema)).toEqual(formData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});
