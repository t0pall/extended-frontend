import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const routerDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);

export default routerDecorator;
