import * as React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import './css/index.scss';

import Home from './containers/home';

export interface AppProps {
}

export default class App extends React.Component<AppProps, any> {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}
