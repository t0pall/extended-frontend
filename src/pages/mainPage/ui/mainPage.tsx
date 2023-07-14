import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main', { keyPrefix: 'main' });
  return <div>{t('Main page')}</div>;
};

export default MainPage;
