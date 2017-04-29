import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataCake } from 'actions/index';

import Header from 'components/header';

class CakeMenu extends Component {
  componentDidMount(){
    this.props.fetchDataCake();
  }

  renderFood() {
    return this.props.cakes.map((cake) => {
      return (
        <div className="col-6" key={cake.id}>
          <img className="img-fluid animated fadeInUp" style={{ 'marginBottom': '20px' }} src={cake.img} alt="" />
        </div>
      );
    });
  }

  render() {
    if (!this.props.cakes) { return (<div>Loading....</div>); }
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h1 style={{ 'color': '#fff', 'marginBottom': '30px' }}><span style={{ 'borderBottom': '2px solid #f7ef6e' }}>Cakes</span></h1>
          <div className="row">
            {this.renderFood()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { cakes: state.foods.data }
}

export default connect(mapStateToProps, { fetchDataCake })(CakeMenu);