import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/themeProvider';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from '../../../shared/assets/icons/theme-light-icon.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark-icon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
