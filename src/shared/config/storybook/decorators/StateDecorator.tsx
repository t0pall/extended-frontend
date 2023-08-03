import { StoryFn } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { authByUsernameReducer } from 'features/AuthByUsername/model/slice/authByUsernameSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  authByUsername: authByUsernameReducer,
};

const StateDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);

export default StateDecorator;
