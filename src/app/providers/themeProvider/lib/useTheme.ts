import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage';
import { Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.DARK: {
      newTheme = Theme.LIGHT;
      break;
    }
    case Theme.LIGHT: {
      newTheme = Theme.CONTRAST;
      break;
    }
    case Theme.CONTRAST: {
      newTheme = Theme.DARK;
      break;
    }
    default: {
      newTheme = Theme.LIGHT;
    }
    }

    if (setTheme) {
      setTheme(newTheme);
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
