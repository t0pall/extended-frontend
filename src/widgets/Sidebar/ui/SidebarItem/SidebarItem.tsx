import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { ISidebarItem } from '../../model/types/ISidebarItem';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = memo(
  ({ collapsed, item }: SidebarItemProps) => {
    const { Icon, path, text } = item;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
      return null;
    }

    return (
      <AppLink
        className={classNames(
          cls.sidebarItem,
          { [cls.collapsed]: collapsed },
          [],
        )}
        theme={AppLinkTheme.INVERTED}
        to={path}
      >
        <Icon className={cls.icon} />
        <span className={cls.text}>{t(text)}</span>
      </AppLink>
    );
  },
);

export default SidebarItem;
