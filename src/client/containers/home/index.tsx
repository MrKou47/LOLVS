import * as React from 'react';

import styles from './index.scss';

import SearchBar from '../../components/searchbar';

export interface AppProps {
}

class Home extends React.Component<AppProps, any> {
  render() {
    console.log(styles);
    return (
      <div className={styles['page']}>
        <div className={styles['logo-wrapper']}>
          <div className={styles['logo']}>
            <div className={`${styles['line']} ${styles['line-1']}`}></div>
            <div className={`${styles['line']} ${styles['line-2']}`}></div>
          </div>
          <p className={styles['logo-text']}>LOLVS</p>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
