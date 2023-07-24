import { classNames } from 'helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    type,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [cls.square]: square,
  };

  const additional = [className, cls[theme], cls[size]];

  console.log(cls);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(cls.Button, mods, additional)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
