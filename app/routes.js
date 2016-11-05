import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './src/App'
import Splash from './src/components/Splash'
import Paxtonia from './src/components/Paxtonia'
import Results from './src/components/Results'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="/game" component={Paxtonia} />
    <Route path="/completed" component={Results} />
   </Route> 
);


