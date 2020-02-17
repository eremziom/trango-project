import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';

const Component = () => {
  return (
    <div>
      <p className={styles.title}>Products</p>
    </div>
  );
};

export {
  Component as Products,
  //Container as ProductsContainer,
};
