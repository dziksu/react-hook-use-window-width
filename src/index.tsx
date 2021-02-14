import { useEffect, useState } from 'react';

function useWindowWidth(): number {
  const isSsr = typeof window === 'undefined';
  const [width, setWidth] = useState(isSsr ? 0 : window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(() => {
        setWidth(window.innerWidth);
      });
    });
  }, [setWidth]);

  return width;
}

export default useWindowWidth;
