import { classNames } from 'helpers/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface notFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<notFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('notFound', { keyPrefix: 'notFound' });
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Page is not found')}
    </div>
  );
};

export default NotFoundPage;
