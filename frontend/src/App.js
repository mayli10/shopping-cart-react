import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Login from './components/Login'
import './App.css';
import classNames from 'classnames';

import Home from './components/Home';
import EmailPopup from './components/EmailPopup';
import ProductListPage from './components/ProductListPage';
import ProductPage from './components/ProductPage';
import DefaultNavBar from './components/DefaultNavBar';
import MyWeareverBox from './modules/MyWeareverBox/Container';
import store, { history } from './store';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ProductListPage}/>
        <Route exact path="/signup" component={Login}/>
        <Route path="/product/:id" component = {ProductPage} />
        <Route exact path="/productlistpage" component={ProductListPage}/>
        <Route exact path="/my-wearever-box" component={MyWeareverBox}/>
      </div>
    </ConnectedRouter>
  </Provider>
);
