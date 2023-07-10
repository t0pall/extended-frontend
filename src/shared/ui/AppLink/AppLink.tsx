import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  NORMAL = 'normal',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.NORMAL,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
