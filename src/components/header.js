import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div className="row animated fadeInUp">
        <div className="col-lg-12 mt-3 text-center">
          <Link to="/"><img src="./src/assets/img/nomnomnom_logo.png" width="180px" alt=""/></Link>
        </div>
        <div className="mx-auto">
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
{/* <div className="row animated fadeInUp">
  <div className="mx-auto mt-3">
    <div className="navbar">
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/gallery">Menu</Link></li>
        <Link to="/"><img src="./src/assets/img/nomnomnom_logo-01.png" width="200px" alt=""/></Link>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </div>
  </div>
</div> */}
