import { classNames } from 'helpers/classNames/classNames';
import {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Modal.module.scss';

const TIMEOUT_DELAY = 100;

interface ModalProps {
  className?: string;
  isOpen: boolean;
  lazy?: boolean;
  handleClose?: () => void;
}

const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  lazy,
  handleClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const contentClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (handleClose) {
      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        handleClose();
        setIsClosing(false);
      }, TIMEOUT_DELAY);
    }
  }, [handleClose]);

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div onClick={closeHandler} className={cls.overlay}>
        <div onClick={contentClickHandler} className={cls.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
