import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  className?: string;
}

const ArticleList: FC<ArticleListProps> = ({
  articles, isLoading, view = ArticleView.SMALL, className,
}) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} />
  );

  return (
    <ul className={classNames(cls.ArticleList, {}, [className])}>
      {articles.length && articles.map(renderArticle)}
    </ul>
  );
};

export default memo(ArticleList);
