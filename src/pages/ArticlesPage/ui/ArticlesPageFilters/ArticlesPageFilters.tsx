import { classNames } from 'helpers/classNames/classNames';
import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import {
  ArticleSortField, ArticlesSortSelector, ArticlesViewSelector, ArticleView,
  ArticleType,
  ArticleTypeTabs,
} from 'entities/Article';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({ className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const handleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleSortChange = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleOrderChange = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const handleTypeChange = useCallback((newType: TabItem<ArticleType>) => {
    dispatch(articlesPageActions.setType(newType.value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticlesSortSelector
          order={order}
          sort={sort}
          onSortChange={handleSortChange}
          onOrderChange={handleOrderChange}
        />
        <ArticlesViewSelector handleViewChange={handleViewChange} view={view} />
      </div>
      <Card className={cls.searchWrapper}>
        <Input onChange={handleSearch} value={search} placeholder={t('Search')} />
      </Card>
      <ArticleTypeTabs onTypeChange={handleTypeChange} value={type} />
    </div>
  );
};

export default memo(ArticlesPageFilters);
