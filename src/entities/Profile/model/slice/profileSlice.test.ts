import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
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

  test('test service fetchProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: 'error',
      isLoading: false,
    };
    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('test service fetchProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: undefined,
      formData: undefined,
    };
    expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled({ age: '40' }, ''))).toEqual({
      isLoading: false,
      data: { age: '40' },
      formData: { age: '40' },
    });
  });

  test('test service fetchProfileData.rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(profileReducer(state as ProfileSchema, fetchProfileData.rejected)).toEqual({
      error: 'error',
      isLoading: false,
    });
  });

  test('test service updateProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: 'error',
      isLoading: false,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('test service updateProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: undefined,
      formData: undefined,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled({ age: '40' }, ''))).toEqual({
      isLoading: false,
      data: { age: '40' },
      formData: { age: '40' },
      readonly: true,
    });
  });

  test('test service updateProfileData.rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: undefined,
      isLoading: true,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.rejected)).toEqual({
      validateErrors: undefined,
      isLoading: false,
    });
  });
});
