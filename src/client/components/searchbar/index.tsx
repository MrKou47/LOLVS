import * as React from 'react';

import styles from './index.scss';

export interface SearchBarProps {
  searching: boolean;
  toggleSearching: () => any;
}

class SearchBar extends React.Component<SearchBarProps, any> {
  render() {
    const { searching, toggleSearching } = this.props;
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["search-bar"]}>
          <input type="text" className="text" />
          <button
            className={`${styles["search-btn"]} ${searching ? styles['loading'] : ''}`}
            onClick={() => toggleSearching()}>搜索</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
