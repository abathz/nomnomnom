import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div className="row animated fadeInUp">
        <div className="col-lg-12 text-center">
          <div className="logo mt-3">
            <img src="./src/assets/img/nomnomnom_logo-01.png" alt=""/>
          </div>
        </div>
        <div className="mx-auto mt-2">
          <div className="navbar">
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
