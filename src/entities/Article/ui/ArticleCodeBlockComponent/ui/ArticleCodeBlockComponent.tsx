import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      
    </div>
  );
};

export default ArticleCodeBlockComponent;
