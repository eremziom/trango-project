import React from 'react';
import styles from './Box.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Component = ({children, photo, header, reverse}) => {
  return (
    <div className={!reverse ? styles.box : clsx(styles.box, styles.boxReverse)}>
      <div className={styles.textContainer}>
        <h3 className={styles.header}>{header}</h3>
        {children}
      </div>
      <div className={styles.imageContainer}>
        <img src={photo} alt='photo' className={styles.image}></img>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  photo: PropTypes.string,
  header: PropTypes.string,
  reverse: PropTypes.string,
};

export {
  Component as Box,
  //Container as BoxContainer,
};
