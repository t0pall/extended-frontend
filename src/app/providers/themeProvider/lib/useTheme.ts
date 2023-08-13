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
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    if (setTheme) {
      setTheme(newTheme);
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
