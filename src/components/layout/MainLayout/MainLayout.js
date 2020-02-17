import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Header } from '../Header/Header';
import { PageNav } from '../PageNav/PageNav';

const Component = ({children}) => {
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar>
          <Toolbar>
            <PageNav />
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
        <Header />
        {children}
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
