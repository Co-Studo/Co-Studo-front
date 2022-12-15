import { RefObject, useLayoutEffect, useState } from 'react';

export const useIsOverflow = (ref: RefObject<HTMLElement>, dependencies) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      const hasOverflow = current.scrollHeight > current.clientHeight;
      setIsOverflow(hasOverflow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...dependencies]);

  return isOverflow;
};
