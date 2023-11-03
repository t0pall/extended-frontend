import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      ArticleDetails
    </div>
  );
};
