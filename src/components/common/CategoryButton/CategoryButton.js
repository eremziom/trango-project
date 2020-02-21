import React from 'react';
import styles from './CategoryButton.module.scss';
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
  Component as CategoryButton,
  //Container as CategoryButtonContainer,
};
