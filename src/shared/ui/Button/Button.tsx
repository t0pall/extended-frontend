import { classNames } from 'helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type: 'button' | 'submit' | 'reset';
  theme: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, type, ...otherProps
  } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
