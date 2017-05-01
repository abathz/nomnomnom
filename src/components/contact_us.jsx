import React, { Component } from 'react';

import Header from 'components/header';
import Footer from 'components/footer';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="mb-5">
        <Header />
        <div className="container">
          <div className="row text-center animated fadeInUp">
            <div className="col-12 content-contact">
              <h1 style={{ 'color': '#fff', 'marginBottom': '30px' }}><span style={{ 'borderBottom': '2px solid #f7ef6e' }}>Address</span></h1>
              <p style={{ 'fontSize': '1.1em' }}>
                Ruko BIBC no 8Q<br />
                Jl Karang Tengah Raya, Lebak Bulus JKT 12440<br /><br />
                Open hours: 9am - 10 pm everyday<br />
                Enquiries: (021) 75817841<br />
                Email: <a href="mailto:clod@nomnomnom.co.id">clod@nomnomnom.co.id</a>
              </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.7059848614217!2d106.7793371!3d-6.3023087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee2813345917%3A0x3d3661cda64bce00!2sNom+Nom+Nom!5e0!3m2!1sen!2s!4v1493450152399" width="600" height="450" frameBorder="0" style={{ 'border': '0' }} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
