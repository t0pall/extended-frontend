import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
