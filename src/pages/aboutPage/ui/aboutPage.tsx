import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about', { keyPrefix: 'about' });
  return (
    <div>
      {t('About this app')}
      {' '}
      <Counter />
    </div>
  );
};

export default AboutPage;
