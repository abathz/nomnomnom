import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="logo mt-3">
            <img src="./src/assets/img/nomnomnom_logo.png" alt=""/>
          </div>
        </div>
        <div className="mx-auto mt-2">
          <div className="navbar">
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
