import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  className?: string;
}

const getSkeletons = (view: ArticleView) => (
  new Array(view === ArticleView.BIG ? 3 : 9).fill(0).map((_, index) => (
    <ArticleListItemSkeleton key={index} view={view} />
  ))
);

const ArticleList: FC<ArticleListProps> = ({
  articles,
  isLoading,
  view = ArticleView.SMALL,
  className,
}) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} key={article.id} view={view} />
  );

  if (isLoading) {
    return (
      <ul className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </ul>
    );
  }

  return (
    <ul className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length && articles.map(renderArticle)}
    </ul>
  );
};

export default memo(ArticleList);
