import { classNames } from 'helpers/classNames/classNames';
import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: string) => void;
  value?: string;
  readonly?: boolean;
  className?: string;
  label?: string;
}

const Select: FC<SelectProps> = memo(
  ({
    options, onChange, value, readonly, className, label,
  }: SelectProps) => {
    const selectOptions = useMemo(
      () => options.map((opt) => (
        <option key={opt.value} value={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
      [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
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
  },
);

export default Select;
