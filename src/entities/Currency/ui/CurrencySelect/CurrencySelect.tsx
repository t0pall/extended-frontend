import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ListBox, { ListBoxItem, ListBoxProps } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/Currency';

type CurrencySelectProps = Omit<
  ListBoxProps<Currency>,
  'options' | 'placeholder' | 'label'
>;

const options: ListBoxItem<Currency>[] = [
  { value: Currency.RUB, name: Currency.RUB },
  { value: Currency.EUR, name: Currency.EUR },
  { value: Currency.USD, name: Currency.USD },
];

const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({
    value,
    onChange,
    disabled,
    className,
    direction,
  }: CurrencySelectProps) => {
    const { t } = useTranslation('profile', { keyPrefix: 'profile' });

    return (
      <ListBox
        options={options}
        direction={direction}
        label={t('Currency')}
        disabled={disabled}
        onChange={onChange}
        placeholder={t('Choose a currency')}
        value={value}
        className={classNames('', {}, [className])}
      />
    );
  },
);

export default CurrencySelect;
