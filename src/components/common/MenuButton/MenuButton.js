import React from 'react';
import styles from './MenuButton.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const Component = ({children, link}) => {
  return (
    <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}${link}`} activeClassName='active'>
      {children}
    </Button>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};

export {
  Component as MenuButton,
  //Container as MenuButtonContainer,
};
