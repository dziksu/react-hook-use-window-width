import { useEffect, useRef, useState } from 'react';

function useWindowWidth(): number {
  const isMounted = useRef<boolean>(true);
  const isSsr = typeof window === 'undefined';
  const [width, setWidth] = useState(isSsr ? 0 : window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(() => {
        if (isMounted.current) {
          setWidth(window.innerWidth);
        }
      });
    });
    return () => {
      isMounted.current = false;
    };
  }, [setWidth]);

  return width;
}

export default useWindowWidth;
