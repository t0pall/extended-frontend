import { ProfileSchema } from '../types/Profile';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: { age: '30' },
      data: { age: '20' },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      formData: { age: '20' },
      data: { age: '20' },
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: {
        username: 'lopl',
        age: '20',
      },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ age: '30' }))).toEqual({
      formData: {
        username: 'lopl',
        age: '30',
      },
    });
  });
});
