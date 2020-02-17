import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';

const Component = () => {
  return (
    <div>
      <p className={styles.title}>Promotions</p>
    </div>
  );
};

export {
  Component as Promotions,
  //Container as PromotionsContainer,
};
