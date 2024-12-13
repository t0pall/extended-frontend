import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ListBox, { ListBoxItem, ListBoxProps } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/Country';

type CountrySelectProps = Omit<
  ListBoxProps<Country>,
  'options' | 'placeholder' | 'label'
>;

const options: ListBoxItem<Country>[] = [
  { name: Country.Armenia, value: Country.Armenia },
  { name: Country.Belarus, value: Country.Belarus },
  { name: Country.Kazakhstan, value: Country.Kazakhstan },
  { name: Country.Russia, value: Country.Russia },
  { name: Country.Ukraine, value: Country.Ukraine },
];

const CountrySelect: FC<CountrySelectProps> = memo(
  ({
    value, onChange, disabled, className, direction,
  }: CountrySelectProps) => {
    const { t } = useTranslation('profile', { keyPrefix: 'profile' });

    const onChangeHandler = useCallback(
      (value) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <ListBox
        options={options}
        direction={direction}
        placeholder={t('Choose a country')}
        disabled={disabled}
        onChange={onChangeHandler}
        value={value}
        label={t('Country')}
        className={classNames('', {}, [className])}
      />
    );
  },
);

export default CountrySelect;
