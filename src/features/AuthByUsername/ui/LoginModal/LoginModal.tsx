import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  handleClose: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, className, handleClose } = props;
  return (
    <Modal
      lazy
      isOpen={isOpen}
      handleClose={handleClose}
      className={classNames(cls.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
