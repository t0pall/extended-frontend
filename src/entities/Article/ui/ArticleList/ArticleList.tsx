import { classNames } from 'helpers/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { List, ListRowRenderer, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page';
import { CARD_SIZE } from 'shared/const/articles';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  error?: string;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 4 : 20)
  .fill(0)
  .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

const ArticleList: FC<ArticleListProps> = ({
  articles,
  isLoading,
  error,
  target,
  view = ArticleView.SMALL,
  className,
}) => {
  const { t } = useTranslation('articles', { keyPrefix: 'articles' });

  const itemsPerRowMap: Record<ArticleView, number> = {
    big: 1,
    small: Math.floor((document?.getElementById(PAGE_ID)?.clientWidth || 1000 - 75) / (CARD_SIZE.s.w + 10)) || 3,
  };

  const rowCountMap: Record<ArticleView, number> = {
    big: articles.length,
    small: Math.ceil(articles.length / itemsPerRowMap.small),
  };

  const rowHeightMap: Record<ArticleView, number> = {
    big: CARD_SIZE.l.h + 20,
    small: CARD_SIZE.s.h + 10,
  };

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const items = [];
    const fromIndex = index * itemsPerRowMap[view];
    const toIndex = Math.min(fromIndex + itemsPerRowMap[view], articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(<ArticleListItem
        article={articles[i]}
        className={cls.card}
        target={target}
        view={view}
        key={i}
      />);
    }

    return (
      <div className={cls.row} style={style} key={key}>
        {items}
      </div>
    );
  };

  if (!error && !isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text
          align={TextAlign.CENTER}
          size={TextSize.L}
          title={t('Nothing was found')}
        />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as HTMLElement}
    >
      {({
        height, registerChild, onChildScroll, scrollTop, width,
      }) => (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          ref={registerChild}
        >
          <List
            height={height}
            rowCount={rowCountMap[view]}
            rowHeight={rowHeightMap[view]}
            rowRenderer={rowRenderer}
            width={width ? width - 75 : 700}
            onScroll={onChildScroll}
            scrollTop={scrollTop}
            autoHeight
          />
          {error ? (
            <Text
              theme={TextTheme.ERROR}
              align={TextAlign.CENTER}
              className={cls.error}
              title={`${t('An error occurred while loading articles')}: "${error}"`}
            />
          ) : null}
          {(!error && isLoading) ? getSkeletons(view) : null}
        </div>
      )}
    </WindowScroller>
  );
};

export default memo(ArticleList);
