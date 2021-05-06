import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './Container/Home/Store/index';
import Home from './Container/Home/index'

ReactDOM.render(
  <Provider store={store}>
  <>
    <Home />
  </>
  </Provider>,
  document.getElementById('root')
);

