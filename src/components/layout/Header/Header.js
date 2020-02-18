import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Component = () => {
  return (
    <div>
      <p className={styles.logo}>TRANGO TOWERS</p>
    </div>
  );
};

export {
  Component as Header,
  //Container as HeaderContainer,
};
