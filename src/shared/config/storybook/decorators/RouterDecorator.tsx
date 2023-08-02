import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>

);

export default RouterDecorator;
