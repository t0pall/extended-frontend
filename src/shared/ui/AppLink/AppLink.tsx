import {classNames} from "helpers/classNames/classNames";
import {FC} from "react";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    NORMAL = 'normal',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
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
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};

export default AppLink