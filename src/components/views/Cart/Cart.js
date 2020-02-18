import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <p className={styles.title}>Cart</p>
    </div>
  );
};

export {
  Component as Cart,
  //Container as CartContainer,
};
