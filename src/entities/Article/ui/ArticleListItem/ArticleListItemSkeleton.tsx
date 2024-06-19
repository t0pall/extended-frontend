import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import Card from 'shared/ui/Card/Card';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

import cls from './ArticleListItem.module.scss';
import {
  ArticleView,
} from '../../model/types/article';

interface ArticleListItemSkeletonProps {
  view: ArticleView;
  className?: string;
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({ view, className }) => {
  if (view === ArticleView.BIG) {
    return (
      <li className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton borderRadius={100} width={30} height={30} />
            <Skeleton className={cls.username} width={100} height={16} />
            <Skeleton className={cls.date} width={120} height={16} />
          </div>
          <Skeleton className={cls.title} width={250} height={32} />
          <Skeleton width={180} height={18} />
          <Skeleton className={cls.img} />
          <Skeleton className={cls.textBlock} height={150} />
          <div className={cls.footer}>
            <Skeleton width={150} />
            <Skeleton className={cls.icon} width={40} height={16} />
          </div>
        </Card>
      </li>
    );
  }

  return (
    <li
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.img} width={200} height={180} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton height={16} />
        </div>
        <Skeleton className={cls.titleSkeleton} height={32} />
      </Card>
    </li>
  );
};

export default memo(ArticleListItemSkeleton);
