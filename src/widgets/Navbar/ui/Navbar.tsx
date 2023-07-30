import { classNames } from 'helpers/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Portal from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.buttons}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          type="button"
          onClick={openModalHandler}
        >
          {t('login')}
        </Button>
      </div>
      <Portal>
        <LoginModal isOpen={isOpen} handleClose={closeModalHandler} />
      </Portal>
    </div>
  );
};

export default Navbar;
