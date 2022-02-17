import { useCallback, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function useWindowWidth(): number {
  const isMounted = useRef<boolean>(true);
  const isSsr = typeof window === 'undefined';
  const [width, setWidth] = useState(isSsr ? 0 : window.innerWidth);

  const handleResize = useCallback(() => {
    if (isMounted.current) {
      setWidth(window.innerWidth);
    }
  }, [setWidth]);

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);

    const element = window.document.querySelector('html');
    if (!element) return;
    observer.observe(element);

    return (): void => {
      isMounted.current = false;
      if (!element) return;
      observer.unobserve(element);
    };
  }, [handleResize]);

  return width;
}

export default useWindowWidth;
