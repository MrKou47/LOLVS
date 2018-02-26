import * as React from 'react';

// import styles from './ss.scss';
const s = require('./ss.css');

export interface AppProps {
}

export default class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div className={s['haha']} >as
      </div>
    );
  }
}
