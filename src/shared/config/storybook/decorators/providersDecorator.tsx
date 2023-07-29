import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

const providersDecorator = (StoryComponent: StoryFn) => (
  <StoreProvider>
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  </StoreProvider>
);

export default providersDecorator;
