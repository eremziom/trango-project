import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const Component = () => {
  return (
    <div className={styles.headBar}>
      <p className={styles.logo}>TRANGO TOWERS</p>
      <div className={styles.search}>
        <div>
          <SearchIcon className={styles.icon}/>
        </div>
        <InputBase placeholder="Search..." className={styles.searchField}></InputBase>
      </div>
    </div>
  );
};

export {
  Component as Header,
  //Container as HeaderContainer,
};
