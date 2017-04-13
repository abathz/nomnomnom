import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import MainIndex from './components/main_index';
import AboutUs from './components/about';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainIndex} />
    <Route path="/about" component={AboutUs} />
    <Redirect from='*' to='/' />
  </Route>
);
