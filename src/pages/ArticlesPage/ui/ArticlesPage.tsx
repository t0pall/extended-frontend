import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView, ArticleList } from 'entities/Article';
import { mockArticle } from 'shared/assets/tests/mocks/mockArticle';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        view={ArticleView.BIG}
        articles={new Array(20)
          .fill(0)
          .map((_, index) => ({ ...mockArticle, id: index.toString() }))}
      />
    </div>
  );
};

export default memo(ArticlesPage);
