import { classNames } from 'helpers/classNames/classNames';
import {
  FC, memo, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onOrderChange: (newOrder: SortOrder) => void;
  onSortChange: (newSort: ArticleSortField) => void;
}

const ArticlesSortSelector: FC<ArticlesSortSelectorProps> = ({
  className,
  sort,
  order,
  onOrderChange,
  onSortChange,
}) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: SortOrder.ASC,
      content: t('ascending'),
    },
    {
      value: SortOrder.DESC,
      content: t('descending'),
    },
  ], [t]);

  const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('creation date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
      <Select
        value={sort}
        options={sortOptions}
        onChange={onSortChange}
        label={t('Sort by')}
      />
      <Select
        value={order}
        options={orderOptions}
        onChange={onOrderChange}
        label={t('Order by')}
      />
    </div>
  );
};

export default memo(ArticlesSortSelector);
