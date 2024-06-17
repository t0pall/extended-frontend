import { DependencyList, useEffect, EffectCallback } from 'react';

export function useInitialEffect(effect: EffectCallback, deps?: DependencyList | undefined) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      effect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
