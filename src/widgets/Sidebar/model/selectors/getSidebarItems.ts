import { createSelector } from '@reduxjs/toolkit';
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import ArticlesPageIcon from 'shared/assets/icons/articles-page-icon.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { getUserAuthData } from 'entities/User';
import { ISidebarItem } from '../types/ISidebarItem';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: ISidebarItem[] = [
    {
      Icon: MainPageIcon,
      path: AppRoutes.MAIN,
      text: 'Main',
    },
    {
      Icon: AboutPageIcon,
      path: AppRoutes.ABOUT,
      text: 'About',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        Icon: ProfilePageIcon,
        path: AppRoutes.PROFILE + userData.id,
        text: 'Profile',
        authOnly: true,
      },
      {
        Icon: ArticlesPageIcon,
        path: AppRoutes.ARTICLES,
        text: 'Articles',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
