import { useCallback, useEffect, useRef, useState } from 'react';

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
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(handleResize);
    });
    return () => {
      isMounted.current = false;
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return width;
}

export default useWindowWidth;
