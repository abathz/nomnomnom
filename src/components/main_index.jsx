import React, { Component } from 'react';

import Header from 'components/header';
import MenuContainer from 'components/menu_container';
import Footer from 'components/footer';

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
