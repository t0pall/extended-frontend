import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return Readonly', () => {
    const readonly = true;
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(readonly);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
