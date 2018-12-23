import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import BeerList from './components/BeerList';
import BeerBrowser from './components/BeerBrowser';

export default(props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={BeerList} />
      <Route path='/browse' component={BeerBrowser} />
    </Switch>
  </BrowserRouter>
);