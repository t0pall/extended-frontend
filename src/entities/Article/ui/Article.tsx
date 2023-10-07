import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Article.module.scss';

interface ArticleProps {
  className?: string;
}

const Article: FC<ArticleProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Article, {}, [className])}>
      
    </div>
  );
};

export default Article;
