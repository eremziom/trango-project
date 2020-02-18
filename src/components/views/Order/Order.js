import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <p className={styles.title}>Order</p>
    </div>
  );
};

export {
  Component as Order,
  //Container as OrderContainer,
};
