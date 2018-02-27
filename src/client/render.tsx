import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './app';

const renderFunc = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );

  if (module.hot) {
    module.hot.accept('./app.tsx', () => {
      // tslint:disable-next-line:no-shadowed-variable
      const App = require('./app');
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('app')
      );
    });
  }
};

export default renderFunc;
