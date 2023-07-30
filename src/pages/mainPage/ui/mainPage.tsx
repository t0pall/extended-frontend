import BugButton from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation('main', { keyPrefix: 'main' });

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <BugButton />
      {t('Main page')}
      <Input
        placeholder={t('Enter the text')}
        value={inputValue}
        onChange={onInputChange}
      />
      <Counter />
    </div>
  );
};

export default MainPage;
