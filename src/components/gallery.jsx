import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataGallery } from 'actions/index';

import Header from 'components/header';
import Footer from 'components/footer';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchDataGallery();
  }

  renderGallery() {
    return this.props.gallery.map((img) => {
      return (
        <div className="card animated fadeInUp" key={img.id}>
          <img className="card-img img-fluid" src={img.img} />
        </div>
      );
    });
  }

  render() {
    if (!this.props.gallery) { return (<div>Loading....</div>); }
    return (
      <div className="mb-5">
        <Header />
        <div className="container text-center">
          <h1 style={{ 'color': '#fff', 'marginBottom': '30px' }}><span style={{ 'borderBottom': '2px solid #f7ef6e' }}>Gallery</span></h1>
          <div className="row">
            <div className="card-columns">
              {this.renderGallery()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gallery: state.gallery.data };
}

export default connect(mapStateToProps, { fetchDataGallery })(Gallery);
