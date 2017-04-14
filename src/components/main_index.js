import React, { Component } from 'react';

import Header from './header';
import MenuContainer from './menu_container';
import Footer from './footer';

export default class MainPages extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <MenuContainer />
        <Footer />
      </div>
    );
  }
}
