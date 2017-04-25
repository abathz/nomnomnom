import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MenuContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="grid col-12 col-lg-6 food-menu animated fadeInLeft">
          <Link to="/about">
            <div className="effect-lily">
              <img className="img-fluid" src="./src/assets/img/food.jpg" alt="img12" />
              <div className="caption">
                <div>
                  <img className="icon-caption" src="./src/assets/img/food-icon.png" width="100px" />
                  <h1>Food</h1>
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid col-12 col-lg-6 cake-menu animated fadeInRight">
          <Link to="/about">
            <div className="effect-lily">
              <img className="img-fluid" src="./src/assets/img/cakes.jpg" alt="img12" />
              <div className="caption">
                <div>
                  <img className="icon-caption" src="./src/assets/img/cake-icon.png" width="90px" />
                  <h1>Cakes</h1>
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
