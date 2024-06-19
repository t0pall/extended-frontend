import { useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseOver: () => void, onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseOver = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  const result = useMemo<UseHoverResult>(() => [isHover, { onMouseOver, onMouseLeave }], [isHover]);

  return result;
};

export default useHover;
