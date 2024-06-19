import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation('about', { keyPrefix: 'about' });
  return (
    <Page>
      {t('About this app')}
      {' '}
      <Counter />
    </Page>
  );
});

export default AboutPage;
