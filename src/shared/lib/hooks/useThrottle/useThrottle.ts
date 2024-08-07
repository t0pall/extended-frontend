import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThrottle = (cb: (...args: any[]) => any, delay: number) => {
  const throttleRef = useRef(false);

  return useCallback((...args) => {
    if (!throttleRef.current) {
      cb(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [cb, delay]);
};
