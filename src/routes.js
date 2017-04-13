import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import MainIndex from './components/main_index';
import AboutUs from './components/about';
import Gallery from './components/gallery';
import ContactUs from './components/contact_us';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainIndex} />
    <Route path="/about" component={AboutUs} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact-us" component={ContactUs} />
    <Redirect from='*' to='/' />
  </Route>
);
