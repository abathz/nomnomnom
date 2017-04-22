import React, { Component } from 'react';

import Header from 'Components/header';
import MenuContainer from 'Components/menu_container';
import Footer from 'Components/footer';

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
