import { classNames } from 'helpers/classNames/classNames';
import { memo, Fragment, useRef } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import Button, { ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';
import { DropdownPosition } from '../../types/ui/DropdownPosition';

const mapDropdownPosition: Record<DropdownPosition, string> = {
  'top left': 'topLeftOption',
  'top right': 'topRightOption',
  'bottom left': 'bottomLeftOption',
  'bottom right': 'bottomRightOption',
};

export interface ListBoxItem<T extends string> {
  name: string;
  value: T;
  disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
  className?: string;
  value?: T;
  options: ListBoxItem<T>[];
  label?: string;
  disabled?: boolean;
  placeholder: string;
  onChange?: (newValue: T) => void;
  direction?: DropdownPosition;
}

const ListBox = <T extends string>({
  className,
  onChange: changeCb,
  placeholder,
  options,
  value,
  label,
  disabled,
  direction = 'bottom right',
}: ListBoxProps<T>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onChange = (newValue: T) => {
    if (changeCb) {
      changeCb(newValue);
    }
    buttonRef.current?.focus();
  };

  return (
    <HStack
      gap="8"
      align="center"
      aria-disabled={disabled}
      className={classNames(cls.listBoxWrapper, { [cls.disabled]: disabled }, [
        className,
      ])}
    >
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListBox
        disabled={disabled}
        as="div"
        className={cls.ListBox}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button aria-disabled={disabled} as="span">
          <Button
            type="button"
            ref={buttonRef}
            disabled={disabled}
            theme={ButtonTheme.OUTLINE}
          >
            {options.find((o) => o.value === value)?.name || placeholder}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          as="ul"
          aria-disabled={disabled}
          className={classNames(cls.list, {}, [
            cls[mapDropdownPosition[direction]],
          ])}
        >
          {options.map((item, index) => (
            <HListBox.Option
              disabled={item.disabled || disabled}
              key={index}
              value={item.value}
              as={Fragment}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.selected]: selected,
                      [cls.disabled]: disabled,
                      [cls.active]: active,
                    },
                    [className],
                  )}
                >
                  {item.name}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};

export default memo(ListBox) as <T extends string>(
  props: ListBoxProps<T>
) => JSX.Element;
