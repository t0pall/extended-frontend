import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';

// eslint-disable-next-line react/display-name
const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div style={{ minHeight: 'initial' }} className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);

export default themeDecorator;
