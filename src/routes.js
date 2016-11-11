import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './app/App'
import SplashContainer from './app/components/containers/SplashContainer'
import PaxtoniaContainer from './app/components/containers/PaxtoniaContainer'


const wakeup = () => (
  fetch('paxtonia-api.herokuapps.com/wakeup')
)

export default (
  <Route path="/" onEnter={wakeup} component={App}>
    <IndexRoute component={SplashContainer}/>
    <Route path="/game" component={PaxtoniaContainer} />
   </Route> 
);

