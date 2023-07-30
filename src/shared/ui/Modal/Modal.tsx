import { classNames } from 'helpers/classNames/classNames';
import {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTheme } from 'app/providers/themeProvider';
import cls from './Modal.module.scss';

const TIMEOUT_DELAY = 100;

interface ModalProps {
  className?: string;
  isOpen: boolean;
  handleClose?: () => void;
}

const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  handleClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const { theme } = useTheme();

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

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
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <div className={classNames(cls.Modal, mods, [className, theme])}>
      <div onClick={closeHandler} className={cls.overlay}>
        <div onClick={contentClickHandler} className={cls.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
