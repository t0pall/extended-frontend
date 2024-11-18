import { classNames } from 'helpers/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { Menu } from '@headlessui/react';
import { To } from 'react-router-dom';
import AppLink from '../../AppLink/AppLink';
import cls from './DropdownItem.module.scss';

export interface TDropdownItem {
  to?: To;
  label: string;
  disabled?: boolean;
  target?: HTMLAttributeAnchorTarget;
  onClick?: () => void;
}

interface DropdownItemProps {
  item: TDropdownItem;
}

const DropdownItem: FC<DropdownItemProps> = ({ item }) => {
  const {
    label, disabled, onClick, target, to,
  } = item;

  if (to) {
    return (
      <Menu.Item
        className={classNames(cls.item, {}, [cls.link])}
        as={AppLink}
        to={to}
        target={target}
        disabled={disabled}
      >
        {({ active, disabled }) => (
          <span
            className={classNames('', {
              [cls.active]: active,
              [cls.disabled]: disabled,
            })}
          >
            {label}
          </span>
        )}
      </Menu.Item>
    );
  }

  return (
    <Menu.Item
      className={classNames(cls.item, {}, [cls.button])}
      as="button"
      disabled={disabled}
      onClick={onClick}
    >
      {({ active, disabled }) => (
        <span
          className={classNames('', {
            [cls.active]: active,
            [cls.disabled]: disabled,
          })}
        >
          {label}
        </span>
      )}
    </Menu.Item>
  );
};

export default memo(DropdownItem);
