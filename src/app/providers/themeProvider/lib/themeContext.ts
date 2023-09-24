import { createContext } from 'react';
import { defaultTheme } from '../ui/themeProvider';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  CONTRAST = 'app_contrast_theme',
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});
