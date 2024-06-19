import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import Page from 'shared/ui/Page/Page';
import cls from './notFoundPage.module.scss';

interface notFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<notFoundPageProps> = memo(({ className }: notFoundPageProps) => {
  const { t } = useTranslation('notFound', { keyPrefix: 'notFound' });
  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Page is not found')}
    </Page>
  );
});

export default NotFoundPage;
