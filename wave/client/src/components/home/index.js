import React, { Component } from 'react';

import { connect } from 'react-redux';

import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import {
  getProductsByArrival,
  getProductsBySell
} from '../../actions/product_actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);
