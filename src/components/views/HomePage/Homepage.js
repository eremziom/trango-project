import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <p className={styles.title}>homepage</p>
    </div>
  );
};

export {
  Component as Homepage,
  //Container as HomepageContainer,
};
