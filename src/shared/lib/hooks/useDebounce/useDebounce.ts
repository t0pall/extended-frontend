import { MutableRefObject, useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (cb: (...args: any[]) => any, delay: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => cb(...args), delay);
  }, [cb, delay]);
};
