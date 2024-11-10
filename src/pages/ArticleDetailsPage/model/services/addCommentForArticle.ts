import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetailsPage/addCommentForArticle',
  async (text, {
    rejectWithValue, getState, dispatch, extra,
  }) => {
    const userData = getUserAuthData(getState());
    const articleData = getArticleDetailsData(getState());

    if (!userData || !text || !articleData) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: articleData.id,
        userId: userData.id,
        text,
      });

      if (!response?.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleData.id));

      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return rejectWithValue('Error occured');
    }
  },
);
