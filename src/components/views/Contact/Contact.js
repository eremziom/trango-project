import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <p className={styles.title}>Contact</p>
    </div>
  );
};

export {
  Component as Contact,
  //Container as ContactContainer,
};
