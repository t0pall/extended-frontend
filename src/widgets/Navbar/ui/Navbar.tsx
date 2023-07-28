import { classNames } from 'helpers/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Portal from 'shared/ui/Portal/Portal';
import Modal from 'shared/ui/Modal/Modal';
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

  const modalContainer = document.getElementsByClassName('app')[0];

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
      <Portal node={modalContainer as HTMLElement}>
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <Button type="button">{t('Войти')}</Button>
        </Modal>
      </Portal>
    </div>
  );
};

export default Navbar;
