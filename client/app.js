import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/Main';
import Index from './components/index';
import SignIn from './components/SignIn';
import Statistics from './components/Statistics';

render(
  <Router history= { browserHistory } >
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="statistics/:id" component={Statistics} />
      <Route path="signin" component={SignIn} />
      <Route path="*" onEnter={() => browserHistory.push("/")} />
    </Route>
  </Router >, 
  document.getElementById('root')
);