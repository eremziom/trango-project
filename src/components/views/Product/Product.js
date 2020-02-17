import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

const Component = () => {
  return (
    <div>
      <p className={styles.title}>Product</p>
    </div>
  );
};

export {
  Component as Product,
  //Container as ProductContainer,
};
