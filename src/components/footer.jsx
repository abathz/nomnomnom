import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 social-media text-center">
          <a href="https://www.instagram.com/nomnomnom_id/" target="_blank"><img src="./src/assets/img/instagramicon.png" width="45px" alt=""/></a>
          <a href="https://twitter.com/nomnomnom_id/" target="_blank"><img src="./src/assets/img/twittericon.png" width="45px" alt=""/></a>
          <a href="https://www.facebook.com/nomnomnom.id/" target="_blank"><img src="./src/assets/img/facebook-logo.png" width="42px" alt=""/></a>
        </div>
        <div className="col-12 footer-info text-center">© 2017 Nom Nom Nom. All Rights Reserved. Developed by <a href="https://www.linkedin.com/in/adlifariz/" target="_blank">Adli Fariz Bonaputra</a></div>
      </div>
    );
  }
}
