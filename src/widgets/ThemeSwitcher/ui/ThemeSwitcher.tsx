import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/themeProvider';
import LightIcon from '../../../shared/assets/icons/theme-light-icon.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark-icon.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
