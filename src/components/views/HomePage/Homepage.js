import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

const Component = () => {
  return (
    <div>
      <p className={styles.title}>hoempage</p>
    </div>
  );
};

export {
  Component as Homepage,
  //Container as HomepageContainer,
};
