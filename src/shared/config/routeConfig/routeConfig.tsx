import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import ArticleEditPage from 'pages/ArticleEditPage/ui/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import ProfilePage from 'pages/ProfilePage';
import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum RouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',
  ARTICLE_EDIT = 'articleDetailsEdit',
  ARTICLE_NEW = 'articleDetailsNew',
  // last
  NOT_FOUND = 'not_found',
}

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile/', // +:id
  ARTICLES = '/articles',
  ARTICLE_DETAILS = '/articles/', // +:id
  ARTICLE_EDIT = '/articles/:id/edit',
  ARTICLE_NEW = '/articles/new',
  // last
  NOT_FOUND = '*',
}

export const routePathsMap: Record<RouteNames, AppRoutes> = {
  [RouteNames.MAIN]: AppRoutes.MAIN,
  [RouteNames.ABOUT]: AppRoutes.ABOUT,
  [RouteNames.PROFILE]: AppRoutes.PROFILE,
  [RouteNames.ARTICLES]: AppRoutes.ARTICLES,
  [RouteNames.ARTICLE_DETAILS]: AppRoutes.ARTICLE_DETAILS,
  [RouteNames.ARTICLE_EDIT]: AppRoutes.ARTICLE_EDIT,
  [RouteNames.ARTICLE_NEW]: AppRoutes.ARTICLE_NEW,
  // last
  [RouteNames.NOT_FOUND]: AppRoutes.NOT_FOUND,
};

export const routeConfig: Record<RouteNames, AppRouteProps> = {
  [RouteNames.MAIN]: {
    path: routePathsMap.main,
    element: <MainPage />,
  },
  [RouteNames.ABOUT]: {
    path: routePathsMap.about,
    element: <AboutPage />,
  },
  [RouteNames.PROFILE]: {
    path: `${routePathsMap.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [RouteNames.ARTICLES]: {
    path: routePathsMap.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [RouteNames.ARTICLE_DETAILS]: {
    path: `${routePathsMap.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [RouteNames.ARTICLE_EDIT]: {
    path: routePathsMap.articleDetailsEdit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [RouteNames.ARTICLE_NEW]: {
    path: routePathsMap.articleDetailsNew,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  // last
  [RouteNames.NOT_FOUND]: {
    path: routePathsMap.not_found,
    element: <NotFoundPage />,
  },
};
