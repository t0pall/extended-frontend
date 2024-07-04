import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const sortfromUrl = searchParams.get('sort') as ArticleSortField;
      const orderfromUrl = searchParams.get('order') as SortOrder;
      const typefromUrl = searchParams.get('type') as ArticleType;
      const searchfromUrl = searchParams.get('search');

      if (sortfromUrl) {
        dispatch(articlesPageActions.setSort(sortfromUrl));
      }

      if (searchfromUrl) {
        dispatch(articlesPageActions.setSearch(searchfromUrl));
      }

      if (typefromUrl) {
        dispatch(articlesPageActions.setType(typefromUrl));
      }

      if (orderfromUrl) {
        dispatch(articlesPageActions.setOrder(orderfromUrl));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
