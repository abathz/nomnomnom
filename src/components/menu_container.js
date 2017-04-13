import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MenuContainer extends Component {
  render() {
    return (
      <div className="row">
        {/* <div className="col-12 col-lg-6 food-menu animated fadeInUp">
          <img className="img-fluid" src="./src/assets/img/food.jpg" alt=""/>
          <div className="overlay">
            <div className="desc-content">
              <h1>Test</h1>
              <Link className="btn btn-primary hvr-float-shadow" to="">Our Menu</Link>
            </div>
          </div>
        </div> */}
        <div className="grid col-12 col-lg-6 food-menu animated fadeInLeft">
          <Link to="/about">
            <figure className="effect-lily">
              <img className="img-fluid" src="./src/assets/img/food.jpg" alt="img12" />
              <figcaption>
                <div>
                  <h2>Nice <span>Lily</span></h2>
                  <p>Lily likes to play with crayons and pencils</p>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
        <div className="grid col-12 col-lg-6 cake-menu animated fadeInRight">
          <Link to="/about">
            <figure className="effect-lily">
              <img className="img-fluid" src="./src/assets/img/cakes.jpg" alt="img12" />
              <figcaption>
                <div>
                  <h2>Nice Lily</h2>
                  <p>Lily likes to play with crayons and pencils</p>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
    );
  }
}
