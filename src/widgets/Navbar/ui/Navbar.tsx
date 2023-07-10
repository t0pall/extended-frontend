import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.INVERTED} className={cls.mainLink} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="/about">
        About
      </AppLink>
    </div>
  </div>
);

export default Navbar;
