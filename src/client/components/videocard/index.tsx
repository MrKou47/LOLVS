import * as React from 'react';

import * as styles from './index.scss';

export interface VideoCardProps {
  title?: string;
  pic: string;
  pagelist: any[];
}

class VideoCard extends React.Component<VideoCardProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      maxSubShow: 4,
      showAll: false,
    };
  }

  toggleShowAll = () => {
    this.setState({
      showAll: !this.state.showAll,
    });
  }

  render() {
    const { title, pic, pagelist } = this.props;
    const { maxSubShow, showAll } = this.state;
    const subVideosDOM = pagelist.map((v, idx) => (
      <a key={v.cid} className={styles['pagelist-item']} href="#">
        <span className={styles['sub-video-title']}>{v.part}</span>
        <span className={styles['play']}>
          <img src="/play.png" alt="play"/>
          <span>{`${v.duration.toString().slice(0,2)}:${v.duration.toString().slice(2)}`}</span>
        </span>
      </a>
    )).filter((v, idx) => showAll ? v : idx < maxSubShow ? v : false );
    
    return (
      <div className={styles['video-card']}>
        <div className={styles['video-banner']}>
          <a href="#">
            <img src={pic.replace('https', 'http')} alt="" />
          </a>
          <h2 className={styles['video-title']}>{title}</h2>
        </div>
        <div className={styles['page-list']}>{subVideosDOM}</div>
        <div className={styles['more-btn']}>
          <span className={showAll ? styles['show-more-btn'] : ''}>
            <img src="/more_info.png" alt=""/>
          </span>
          <span onClick={this.toggleShowAll}>{showAll ? 'hide' : 'show'} more <b>{pagelist.length - maxSubShow}</b> p</span>
        </div>
      </div>
    );
  }
}

export default VideoCard;
