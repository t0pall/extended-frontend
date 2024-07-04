import { classNames } from 'helpers/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Tabs.module.scss';
import Card, { CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

const Tabs = <T extends string>({
  className, tabs, onTabClick, value,
}: TabsProps<T>) => {
  const { t } = useTranslation();

  const handleClick = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          onClick={handleClick(tab)}
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          className={classNames(cls.tab, { [cls.active]: value === tab.value })}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export default Tabs;
