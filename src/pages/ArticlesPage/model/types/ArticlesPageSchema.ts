import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  hasMore: boolean;

  // filters & settings
  view: ArticleView;
  limit: number;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  // protected
  _inited: boolean;
}
