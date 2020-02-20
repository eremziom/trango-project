import React from 'react';
import styles from './Category.module.scss';
import PropTypes from 'prop-types';

const Component = ({children, onChildClick, category}) => {

  function handleClick(event) {
    onChildClick(event.target.name);
  }

  return (
    <button name={category} onClick={handleClick} className={styles.categoryButton}>
      {children}
    </button>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  category: PropTypes.string,
  onChildClick: PropTypes.func,
};

export {
  Component as Category,
  //Container as CategoryContainer,
};
