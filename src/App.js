import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { Homepage } from './components/views/HomePage/Homepage';
import { MainLayout} from './components/layout/MainLayout/MainLayout';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
