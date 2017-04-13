import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 content">
          <div className="col-lg-6">
            <div className="text-center">
              <h4>Open Hours</h4>
              <p style={{fontFamily: 'Gotham-Light'}}>
                9am - 10pm<br/>
                Monday - Sunday
              </p>
              <p>
                Enquiries: (021) 75817841<br/>
              </p>
              <div className="social-media">
                <img src="./assets/img/instagramicon.png" alt=""/>
                <img src="./assets/img/twittericon.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
