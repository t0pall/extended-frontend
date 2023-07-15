import BugButton from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main', { keyPrefix: 'main' });
  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  );
};

export default MainPage;
