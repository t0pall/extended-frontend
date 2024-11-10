import { classNames } from 'helpers/classNames/classNames';
import { FC, HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
}

const Card: FC<CardProps> = ({
  className, children, theme = CardTheme.NORMAL, ...otherProps
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </div>
);

export default memo(Card);
