# React hook use-window-width

React a simple hook to receive current window width using window.requestAnimationFrame for a great performance.

## Installation

Use the package manager yarn or npm to install foobar.

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
