import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import ProfilePage from 'pages/ProfilePage';
import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum RoutesNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',
  // last
  NOT_FOUND = 'not_found',
}

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile/', // +:id
  ARTICLES = '/articles',
  ARTICLE_DETAILS = '/articles/', // +:id
  // last
  NOT_FOUND = '*',
}

export const routePath: Record<RoutesNames, AppRoutes> = {
  [RoutesNames.MAIN]: AppRoutes.MAIN,
  [RoutesNames.ABOUT]: AppRoutes.ABOUT,
  [RoutesNames.PROFILE]: AppRoutes.PROFILE,
  [RoutesNames.ARTICLES]: AppRoutes.ARTICLES,
  [RoutesNames.ARTICLE_DETAILS]: AppRoutes.ARTICLE_DETAILS,
  // last
  [RoutesNames.NOT_FOUND]: AppRoutes.NOT_FOUND,
};

export const routeConfig: Record<RoutesNames, AppRoutesProps> = {
  [RoutesNames.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [RoutesNames.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
  [RoutesNames.PROFILE]: {
    path: `${routePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [RoutesNames.ARTICLES]: {
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [RoutesNames.ARTICLE_DETAILS]: {
    path: `${routePath.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  // last
  [RoutesNames.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
