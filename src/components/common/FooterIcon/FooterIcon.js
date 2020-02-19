import React from 'react';
import styles from './FooterIcon.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Component = ({children}) => {
  return (
    <div className={styles.icon}>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as FooterIcon,
  //Container as FooterIconContainer,
};
