# React hook: useWindowWidth

A simple hook for React to receive current window width using `window.requestAnimationFrame` for a better performance.

## Requirements
A minimal requirements to use the package:

```json
{
  "react": ">=16.8"
}
```

## Installation

Use the package manager yarn or npm to install **react-hook-use-window-width**.

```bash
npm install react-hook-use-window-width
```
or
```bash
yarn add react-hook-use-window-width
```

## Usage

```typescript jsx
import React from 'react';
import useWindowWidth from 'react-hook-use-window-width';

const MyComponnet: React.FC = () => {
  const width = useWindowWidth();

  return (
    <div>
      Window width: <strong>{width}</strong>
    </div>
  );
};
```

## RAW implementation
If you don't want to use the package, and you only need a simple hook implementation you can just copy and paste the current implementation from `/src/index.tsx`

```typescript jsx
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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
