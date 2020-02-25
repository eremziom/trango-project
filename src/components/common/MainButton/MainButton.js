import React from 'react';
import styles from './MainButton.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const Component = ({children, link}) => {
  return (
    <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}${link}`} activeClassName={styles.active} className={styles.MainButton}>
      {children}
    </Button>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};

export {
  Component as MainButton,
  //Container as MainButtonContainer,
};
