import { classNames } from 'helpers/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  value?: T;
  readonly?: boolean;
  className?: string;
  label?: string;
}

const Select = <T extends string>({
  options, onChange, value, readonly, className, label,
}: SelectProps<T>) => {
  const selectOptions = useMemo(
    () => options?.map((opt) => (
      <option key={opt.value} value={opt.value} className={cls.option}>
        {opt.content}
      </option>
    )),
    [options],
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <div className={classNames(cls.wrapper, { [cls.readonly]: readonly }, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
            &nbsp;
        </span>
      )}
      <select className={cls.select} disabled={readonly} value={value} onChange={onChangeHandler}>
        {selectOptions}
      </select>
    </div>
  );
};

export default Select;
