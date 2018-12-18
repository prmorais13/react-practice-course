import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageTop from './PageTop';
import { getBrands, getWoods } from '../../../actions/product_actions';

class Shop extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browser Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">Left</div>
            <div className="right">Right</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Shop);
