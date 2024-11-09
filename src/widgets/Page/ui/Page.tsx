import { classNames } from 'helpers/classNames/classNames';
import {
  FC, MutableRefObject, ReactNode, UIEventHandler, memo, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollRestorationScrollByPath, scrollRestorationActions } from 'features/ScrollRestoration';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'page-id';

const Page: FC<PageProps> = (props) => {
  const { children, onScrollEnd, className } = props;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollPosition = useSelector(
    (state: StateSchema) => getScrollRestorationScrollByPath(state, pathname),
  );

  useInfiniteScroll({ triggerRef, wrapperRef, cb: onScrollEnd });

  const handleScroll: UIEventHandler<HTMLDivElement> = useThrottle((e) => {
    dispatch(scrollRestorationActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
  }, 300);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <section
      id={PAGE_ID}
      ref={wrapperRef}
      onScroll={handleScroll}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}

      {onScrollEnd ? <div className={cls.scrollTrigger} ref={triggerRef} /> : null}
    </section>
  );
};

export default memo(Page);
