import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunkMiddleware from 'redux-thunk'
import { Router, browserHistory } from 'react-router';
import routes from './routes'
import { createStore, applyMiddleware } from 'redux';
import PaxtoniaReducers from './app/reducers/index'
import { Provider } from 'react-redux'

let store = createStore(PaxtoniaReducers, applyMiddleware(thunkMiddleware))

const announce = () => console.log(store.getState())

setInterval(announce, 7000)

ReactDOM.render(
<Provider store={store}>
  <Router history={browserHistory} routes={routes} />
</Provider>,
  document.getElementById('root')
);
