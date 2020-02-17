import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';

import Button from '@material-ui/core/Button';

import { MenuButton } from '../../common/MenuButton/MenuButton';
import Container from '@material-ui/core/Container';

const Component = () => {
  return (
    <Container maxWidth="lg">
      <nav className={styles.navi}>
        <MenuButton link={'/'}>MAIN</MenuButton>
        <MenuButton link={'/products'}>PRODUCTS</MenuButton>
        <MenuButton link={'/promotions'}>PROMOTIONS</MenuButton>
      </nav>
    </Container>
  );
};

export {
  Component as PageNav,
  //Container as PageNavContainer,
};
