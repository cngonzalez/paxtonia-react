import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './index.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes'
import { createStore, applyMiddleware } from 'redux';
import PaxtoniaReducers from './src/reducers/index'
import { Provider } from 'react-redux'

let store = createStore(PaxtoniaReducers, applyMiddleware(thunkMiddleware)


ReactDOM.render(
<Provider store={store}>
  <Router history={browserHistory} routes={routes} />
</Provider>,
  document.getElementById('root')
);
