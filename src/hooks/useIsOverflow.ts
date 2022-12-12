import { RefObject, useEffect, useState } from 'react';

export const useIsOverflow = (ref: RefObject<HTMLElement>) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      const hasOverflow = current.scrollHeight > current.clientHeight;
      setIsOverflow(hasOverflow);
    }
  }, [ref]);

  return isOverflow;
};
