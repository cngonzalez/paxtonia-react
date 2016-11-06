import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './src/App'
import SplashContainer from './src/components/containers/SplashContainer'
import Paxtonia from './src/components/Paxtonia'
import Results from './src/components/Results'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SplashContainer}/>
    <Route path="/game" component={Paxtonia} />
    <Route path="/completed" component={Results} />
   </Route> 
);


