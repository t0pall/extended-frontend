import BugButton from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import ListBox, { ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page';

enum names {
  Настя = '1',
  Сеня = '2',
  Мася = '3',
  Чернышевский = '4',
  Белышевский = '5',
}

const items: ListBoxItem<names>[] = [
  { name: 'Настя', value: names.Настя },
  { name: 'Сеня', value: names.Сеня },
  { name: 'Мася', value: names.Мася },
  { name: 'Чернышевский', value: names.Чернышевский, disabled: true },
  { name: 'Белышевский', value: names.Белышевский },
];

const MainPage = memo(() => {
  const [inputValue, setInputValue] = useState('');
  const [listBoxValue, setListBoxValue] = useState<names>();
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
      <Counter />
      <Counter />
      <Counter />
      <Counter />

      <ListBox
        value={listBoxValue}
        placeholder={t('Choose a value')}
        onChange={setListBoxValue}
        options={items}
        direction="top"
      />
    </Page>
  );
});

export default MainPage;
