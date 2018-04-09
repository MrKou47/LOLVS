import * as React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../components/searchbar';
import VideoCard from '../../components/videocard';

import styles from './index.scss';

import { IHybirdProps } from 'interface/client/index';

import { TOGGLE_SEARCH, getVideoList } from './action';
import { IHomeState } from './reducer';

class Home extends React.Component<IHybirdProps<IHomeState>, any> {

  componentDidMount() {
    this.props.dispatch(getVideoList());
  }

  toogleSearching = () => {
    this.props.dispatch({
      type: TOGGLE_SEARCH
    });
    setTimeout(() => {
      this.props.dispatch({
        type: TOGGLE_SEARCH
      });
    }, 3000);
  }

  render() {
    const { searching } = this.props;
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
        <SearchBar searching={searching} toggleSearching={this.toogleSearching} />
        <div className={styles['video-list']} >
          <VideoCard key={1} />
          <VideoCard key={2} />
        </div>
      </div>
    );
  }
}

const mapState2Props = store => {
  return {...store.home};
};

export default connect(mapState2Props)(Home);
