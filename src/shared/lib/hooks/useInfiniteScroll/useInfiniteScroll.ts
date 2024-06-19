import { MutableRefObject, useLayoutEffect } from 'react';

export interface UseInfiniteScrollOptions {
  cb?: () => void;
  triggerRef: MutableRefObject<Element>;
  wrapperRef: MutableRefObject<Element>;
}

export const useInfiniteScroll = ({ cb, triggerRef, wrapperRef }: UseInfiniteScrollOptions) => {
  useLayoutEffect(() => {
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;
    let observer: IntersectionObserver | null = null;
    if (cb) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          cb();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [cb, triggerRef, wrapperRef]);
};
