import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      
    </div>
  );
};

export default ArticleImageBlockComponent;
