import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useWindowWidth from '../src';

const App: React.FC = () => {
  const width = useWindowWidth();

  return (
    <div>
      Window width: <strong>{width}</strong>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
