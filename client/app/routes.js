import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main/Main';
import Home from './components/Home/Home';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
