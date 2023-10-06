import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('Articles')}
    </div>
  );
};

export default memo(ArticlesPage);
