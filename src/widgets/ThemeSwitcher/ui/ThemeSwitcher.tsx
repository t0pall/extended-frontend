import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/themeProvider';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import LightIcon from '../../../shared/assets/icons/theme-light-icon.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark-icon.svg';
import ContrastIcon from '../../../shared/assets/icons/theme-contrast-icon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  let Icon: React.VFC<React.SVGProps<SVGSVGElement>>;

  switch (theme) {
  case Theme.DARK: {
    Icon = DarkIcon;
    break;
  }
  case Theme.LIGHT: {
    Icon = LightIcon;
    break;
  }
  case Theme.CONTRAST: {
    Icon = ContrastIcon;
    break;
  }
  default: {
    Icon = LightIcon;
  }
  }

  return (
    <Button
      type="button"
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      <Icon />
    </Button>
  );
});

export default ThemeSwitcher;
