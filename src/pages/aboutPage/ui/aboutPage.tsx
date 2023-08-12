import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation('about', { keyPrefix: 'about' });
  return (
    <div>
      {t('About this app')}
      {' '}
      <Counter />
    </div>
  );
});

export default AboutPage;
