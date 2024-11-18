import { classNames } from 'helpers/classNames/classNames';
import { forwardRef, memo } from 'react';
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

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
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
      ref={ref}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </Link>
  );
});

export default memo(AppLink);
