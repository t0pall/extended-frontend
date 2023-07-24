import { classNames } from 'helpers/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const mods = { [cls.collapsed]: collapsed };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, mods, [className])}
    >
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          className={cls.link}
          to={routePath.main}
        >
          <MainPageIcon className={cls.icon} />
          <span className={cls.text}>{t('Main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          className={cls.link}
          to={routePath.about}
        >
          <AboutPageIcon className={cls.icon} />
          <span className={cls.text}>{t('About')}</span>
        </AppLink>
      </div>

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
    </div>
  );
};

export default Sidebar;
