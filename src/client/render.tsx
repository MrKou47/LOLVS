import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

const renderFunc = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
  if (module.hot) {
    module.hot.accept('./app.tsx', () => {
      // tslint:disable-next-line:no-shadowed-variable
      const App = require('./app');
      ReactDOM.render(<App />, document.getElementById('app'));
    });
  }
};

export default renderFunc;
