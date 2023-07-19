import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';

// eslint-disable-next-line react/display-name
const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <div
    style={{ minHeight: 'initial' }}
    className={`app ${theme}`}
  >
    <StoryComponent />
  </div>
);

export default themeDecorator;
