import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendations/articleDetailsRecommendations';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
});
