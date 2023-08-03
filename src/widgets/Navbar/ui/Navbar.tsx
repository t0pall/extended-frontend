import { classNames } from 'helpers/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Portal from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
    <div className={classNames(cls.Navbar, {}, [className])}>
      {navbarInner()}
    </div>
  );
};

export default Navbar;
