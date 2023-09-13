import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  className?: string;
  readonly?: boolean;
}

const options: SelectOption[] = [
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.USD, value: Currency.USD },
];

const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({
    value, onChange, readonly, className,
  }: CurrencySelectProps) => {
    const { t } = useTranslation('profile', { keyPrefix: 'profile' });

    const onChangeHandler = useCallback((value) => {
      onChange?.(value as Currency);
    }, [onChange]);

    return (
      <Select
        options={options}
        readonly={readonly}
        onChange={onChangeHandler}
        value={value}
        label={t('Currency')}
        className={classNames('', {}, [className])}
      />
    );
  },
);

export default CurrencySelect;
