import React from 'react';
import ReactDOM from 'react-dom';
import BeerList from './components/BeerList';
import { store } from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BeerList />
  </Provider>, 
  document.getElementById('app')
);
