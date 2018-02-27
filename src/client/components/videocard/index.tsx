import * as React from 'react';

import * as styles from './index.scss';

export interface VideoCardProps {
}

export default function VideoCard(props: VideoCardProps) {
  return (
    <div className={styles['video-card']}>
      <div className={styles['video-banner']}>
        <a href="#">
          <img src="https://img.infinitynewtab.com/wallpaper/503.jpg" alt="" />
        </a>
        <h2 className={styles['video-title']}>Using Card-Based Design To Enhance UX</h2>
      </div>
      <div className={styles['page-list']}>
        <a className={styles['pagelist-item']} href="#">
          <span>What are Cards?</span>
          <span className={styles['play']}>
            <img src="/play.png" alt="play"/>
            <span>30:55</span>
          </span>
        </a>
        <a className={styles['pagelist-item']} href="#">
          <span>What are Cards?</span>
          <span className={styles['play']}>
            <img src="/play.png" alt="play"/>
            <span>30:55</span>
          </span>
        </a>
        <a className={styles['pagelist-item']} href="#">
          <span>What are Cards?</span>
          <span className={styles['play']}>
            <img src="/play.png" alt="play"/>
            <span>30:55</span>
          </span>
        </a>
      </div>
      <div className={styles['more-btn']}>
        <span>
          <img src="/more_info.png" alt=""/>
        </span>
        <span>show more <b>4</b> p</span>
      </div>
    </div>
  );
}
