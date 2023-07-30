import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';
import cls from './themeDecorator.module.scss';

// eslint-disable-next-line react/display-name
const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`${theme} ${cls.story}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);

export default themeDecorator;
