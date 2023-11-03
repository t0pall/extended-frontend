import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      
    </div>
  );
};

export default ArticleTextBlockComponent;
