import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onTypeChange: (tab: TabItem<ArticleType>) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ className, value, onTypeChange }) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });
  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    { value: ArticleType.ALL, content: t('ALL') },
    { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
    { value: ArticleType.IT, content: t('IT') },
    { value: ArticleType.SCIENCE, content: t('SCIENCE') },
  ], [t]);

  return (
    <Tabs className={classNames('', {}, [className])} onTabClick={onTypeChange} tabs={typeTabs} value={value} />
  );
};

export default memo(ArticleTypeTabs);
