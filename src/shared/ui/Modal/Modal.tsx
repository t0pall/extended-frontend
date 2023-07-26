import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  handleClose,
}) => {

  const mods = {
    [cls.opened]: isOpen
  }

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div onClick={handleClose} className={cls.overlay}>
        <div className={cls.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
