import { classNames } from 'helpers/classNames/classNames';
import { FC, HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card: FC<CardProps> = ({ className, children, ...otherProps }) => (
  <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
    {children}
  </div>
);

export default memo(Card);
