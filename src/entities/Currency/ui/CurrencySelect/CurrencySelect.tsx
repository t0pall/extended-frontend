import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ListBox, { ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (newValue: Currency) => void;
  className?: string;
  readonly?: boolean;
}

const options: ListBoxItem<Currency>[] = [
  { value: Currency.RUB, name: Currency.RUB },
  { value: Currency.EUR, name: Currency.EUR },
  { value: Currency.USD, name: Currency.USD },
];

const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({
    value, onChange, readonly, className,
  }: CurrencySelectProps) => {
    const { t } = useTranslation('profile', { keyPrefix: 'profile' });

    return (
      <ListBox
        options={options}
        label={t('Currency')}
        disabled={readonly}
        onChange={onChange}
        placeholder={t('Choose a currency')}
        value={value}
        className={classNames('', {}, [className])}
      />
    );
  },
);

export default CurrencySelect;
