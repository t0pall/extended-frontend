import { classNames } from 'helpers/classNames/classNames';
import { FC, Suspense } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import Loader from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
      className={classNames('', {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={handleClose} />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;
