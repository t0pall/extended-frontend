import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  className?: string;
  readonly?: boolean;
}

const options: SelectOption<Country>[] = [
  { content: Country.Armenia, value: Country.Armenia },
  { content: Country.Belarus, value: Country.Belarus },
  { content: Country.Kazakhstan, value: Country.Kazakhstan },
  { content: Country.Russia, value: Country.Russia },
  { content: Country.Ukraine, value: Country.Ukraine },
];

const CountrySelect: FC<CountrySelectProps> = memo(
  ({
    value, onChange, readonly, className,
  }: CountrySelectProps) => {
    const { t } = useTranslation('profile', { keyPrefix: 'profile' });

    const onChangeHandler = useCallback(
      (value) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <Select
        options={options}
        readonly={readonly}
        onChange={onChangeHandler}
        value={value}
        label={t('Country')}
        className={classNames('', {}, [className])}
      />
    );
  },
);

export default CountrySelect;
