import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataGallery } from 'actions/index';

import Header from 'components/header';
import Footer from 'components/footer';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchDataGallery();
  }

  renderFood() {
    return this.props.gallery.map((img) => {
      return (
        <div class="card">
          <img class="card-img img-fluid" src="..." alt="Card image" />
        </div>
      );
    });
  }

  render() {
    if (!this.props.gallery) { return (<div>Loading....</div>); }
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h1 style={{ 'color': '#fff', 'marginBottom': '30px' }}><span style={{ 'borderBottom': '2px solid #f7ef6e' }}>Gallery</span></h1>
          <div className="row">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gallery: state.gallery.data };
}

export default connect(mapStateToProps, { fetchDataGallery })(Gallery);
