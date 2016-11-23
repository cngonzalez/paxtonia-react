import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './app/App'
import SplashContainer from './app/components/containers/SplashContainer'
import PaxtoniaContainer from './app/components/Paxtonia'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SplashContainer}/>
    <Route path="/game" component={PaxtoniaContainer} />
   </Route> 
);

