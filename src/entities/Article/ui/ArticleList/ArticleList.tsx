import { classNames } from 'helpers/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  error?: string;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 4 : 20)
  .fill(0)
  .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

const ArticleList: FC<ArticleListProps> = ({
  articles,
  isLoading,
  error,
  target,
  view = ArticleView.SMALL,
  className,
}) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} target={target} key={article.id} view={view} />
  );

  if (!error && !isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text
          align={TextAlign.CENTER}
          size={TextSize.L}
          title={t('Nothing was found')}
        />
      </div>
    );
  }

  return (
    <ul className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {error ? (
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          className={cls.error}
          title={`${t('An error occurred while loading articles')}: "${error}"`}
        />
      ) : null}
      {(!error && isLoading) ? getSkeletons(view) : null}
    </ul>
  );
};

export default memo(ArticleList);
