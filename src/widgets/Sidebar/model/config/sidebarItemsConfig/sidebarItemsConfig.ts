import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg';

export const sidebarItemsConfig = [
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
  {
    Icon: ProfilePageIcon,
    path: AppRoutes.PROFILE,
    text: 'Profile',
  },
];
