import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(getUserAuthData, getArticleDetailsData, (user, article) => {
  if (!user?.id || !article?.user.id) {
    return false;
  }

  return user?.id === article?.user.id;
});
