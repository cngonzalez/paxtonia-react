import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './app/App'
import Splash from './app/components/Splash'
import Paxtonia from './app/components/Paxtonia'
import Results from './app/components/Results'


const wakeup = () => (
  fetch('paxtonia-api.herokuapps.com/wakeup')
)

export default (
  <Route path="/" onEnter={wakeup} component={App}>
    <IndexRoute component={Splash}/>
    <Route path="/game" component={Paxtonia} />
    <Route path="/completed" component={Results} />
   </Route> 
);

