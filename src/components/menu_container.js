import React, { Component } from 'react';

export default class MenuContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-lg-6 food-menu">
          <img className="img-fluid" src="./src/assets/img/food.jpg" alt=""/>
        </div>
        <div className="col-12 col-lg-6 cake-menu">
          <img className="img-fluid" src="./src/assets/img/cakes.jpg" alt=""/>
        </div>
      </div>
    );
  }
}
