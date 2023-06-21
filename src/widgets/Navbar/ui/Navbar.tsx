import {classNames} from "helpers/classNames/classNames";
import {FC} from "react";
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar
