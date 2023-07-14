import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about', { keyPrefix: 'about' });
  return (<div>{t('About this app')}</div>);
};

export default AboutPage;
