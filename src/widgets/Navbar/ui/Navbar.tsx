import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links} />
    </div>
  );
};

export default Navbar;
