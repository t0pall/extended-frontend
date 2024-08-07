import { classNames } from 'helpers/classNames/classNames';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Portal from 'shared/ui/Portal/Portal';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoginModal } from 'features/AuthByUsername';
import Text, { TextSize, TextTheme } from 'shared/ui/Text/Text';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const openModalHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const navbarInner = () => {
    if (!authData) {
      return (
        <>
          <div className={cls.buttons}>
            <Button
              theme={ButtonTheme.CLEAR_INVERTED}
              type="button"
              onClick={openModalHandler}
            >
              {t('Login')}
            </Button>
          </div>
          <Portal>
            <LoginModal isOpen={isOpen} handleClose={closeModalHandler} />
          </Portal>
        </>
      );
    }

    return (
      <div className={cls.buttons}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          type="button"
          onClick={logoutHandler}
        >
          {t('Logout')}
        </Button>
      </div>
    );
  };

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text className={cls.logo} theme={TextTheme.INVERTED} title={t('NEDOHABR')} size={TextSize.L} />
      <AppLink theme={AppLinkTheme.INVERTED} to={AppRoutes.ARTICLE_NEW}>{t('Create article')}</AppLink>
      {navbarInner()}
    </header>
  );
});

export default Navbar;
