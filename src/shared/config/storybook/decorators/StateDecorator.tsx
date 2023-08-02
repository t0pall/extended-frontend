import { StoryFn } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

const StateDecorator = (state?: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);

export default StateDecorator;
