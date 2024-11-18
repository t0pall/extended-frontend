import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownPosition } from 'shared/types/ui/DropdownPosition';
import cls from './Dropdown.module.scss';
import DropdownItem, { type TDropdownItem } from './DropdownItem/DropdownItem';

const mapDropdownPosition: Record<DropdownPosition, string> = {
  'top left': 'topLeftOption',
  'top right': 'topRightOption',
  'bottom left': 'bottomLeftOption',
  'bottom right': 'bottomRightOption',
};

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: TDropdownItem[];
  position?: DropdownPosition;
}

const Dropdown: FC<DropdownProps> = ({
  className,
  trigger,
  items,
  position = 'bottom right',
}) => (
  <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
    <Menu.Button className={classNames(cls.trigger, {}, [])}>
      {trigger}
    </Menu.Button>
    <Menu.Items
      as="ul"
      className={classNames(cls.list, {}, [
        cls[mapDropdownPosition[position]],
      ])}
    >
      {items.map((item) => (
        <DropdownItem key={item.label} item={item} />
      ))}
    </Menu.Items>
  </Menu>
);

export default memo(Dropdown);
