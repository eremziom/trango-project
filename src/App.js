import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { Homepage } from './components/views/HomePage/Homepage';
import { Products } from './components/views/Products/Products';
import { Promotions } from './components/views/Promotions/Promotions';
import { Product } from './components/views/Product/Product';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Cart } from './components/views/Cart/Cart';
import { Order } from './components/views/Order/Order';
import { Contact } from './components/views/Contact/Contact';
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
              <Route exact path='/products' component={Products} />
              <Route exact path='/promotions' component={Promotions} />
              <Route exact path='/products/:name' component={Product} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={Order} />
              <Route exact path='/contact' component={Contact} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
