import { classNames } from 'helpers/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button type="button" theme={ThemeButton.CLEAR} onClick={onToggle}>
        {t('toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.language} />
      </div>
    </div>
  );
};

export default Sidebar;
