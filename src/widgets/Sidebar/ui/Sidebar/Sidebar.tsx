import { classNames } from 'helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { FC, memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItemsList = useSelector(getSidebarItems);

  const mods = { [cls.collapsed]: collapsed };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, mods, [className])}
    >
      <VStack role="navigation" gap="8" className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} collapsed={collapsed} item={item} />
        ))}
      </VStack>
      <Button
        data-testid="sidebar_toggle"
        className={cls.collapseBtn}
        type="button"
        size={ButtonSize.L}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.language} />
      </div>
    </aside>
  );
});

export default Sidebar;
