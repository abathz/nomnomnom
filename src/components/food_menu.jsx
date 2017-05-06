import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchDataFood } from 'actions/index';

import Header from 'components/header';

class FoodMenu extends PureComponent {
  componentWillMount() {
    this.props.fetchDataFood();
  }

  renderFood() {
    return this.props.foods.map((food) => {
      return (
        <div className="col-6" key={food.id}>
          <img className="img-fluid animated fadeInUp" style={{ 'marginBottom': '20px' }} src={food.img} alt="" />
        </div>
      );
    });
  }

  render() {
    if (!this.props.foods) { return (<div>Loading....</div>); }
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h1 style={{ 'color': '#fff', 'marginBottom': '30px' }}><span style={{ 'borderBottom': '2px solid #f7ef6e' }}>Foods</span></h1>
          <div className="row">
            {this.renderFood()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { foods: state.foods.data };
}

export default connect(mapStateToProps, { fetchDataFood })(FoodMenu);
