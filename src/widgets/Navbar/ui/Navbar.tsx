import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} className={cls.mainLink} to="/">
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
