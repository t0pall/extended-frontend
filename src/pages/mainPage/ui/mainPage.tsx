import BugButton from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation('main', { keyPrefix: 'main' });

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Page>
      <BugButton />
      {t('Main page')}
      <Input
        placeholder={t('Enter the text')}
        value={inputValue}
        onChange={onInputChange}
      />
      <Counter />
    </Page>
  );
});

export default MainPage;
