import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Header } from '../Header/Header';
import { PageNavContainer } from '../PageNav/PageNav';
import { Footer } from '../Footer/Footer';

const Component = ({children}) => {
  return (
    <div className={styles.screen}>
      <Container maxWidth="lg" className={styles.container}>
        <AppBar className={styles.appBar}>
          <Toolbar>
            <PageNavContainer />
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
        <Header />
        {children}
        <Footer />
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
};
