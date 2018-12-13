import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Header extends Component {
  state = {
    page: [
      {
        name: 'Home',
        linkTo: '/',
        public: true
      },
      {
        name: 'Feltros',
        linkTo: '/shop',
        public: true
      }
    ],
    user: [
      {
        name: 'Meu Carrinho',
        linkTo: '/user/cart',
        public: false
      },
      {
        name: 'Minha Conta',
        linkTo: '/user/dashboard',
        public: false
      },
      {
        name: 'Login',
        linkTo: '/register_login',
        public: true
      },
      {
        name: 'Logout',
        linkTo: '/user/logout',
        public: false
      }
    ]
  };

  defaultLink = (item, i) => (
    <Link to={item.linkTo} key={item.i}>
      {item.name}
    </Link>
  );

  showLinks = type => {
    let list = [];

    if (this.props.user.userData) {
      type.forEach(item => {
        if (!this.props.user.userData.isAuth) {
          if (item.public === true) {
            list.push(item);
          }
        } else {
          if (item.name !== 'Login') {
            list.push(item);
          }
        }
      });
    }

    return list.map((item, i) => {
      return this.defaultLink(item, i);
    });
  };

  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">MIMOS</div>
          </div>
          <div className="right">
            <div className="top">{this.showLinks(this.state.user)}</div>
            <div className="bottom">{this.showLinks(this.state.page)}</div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Header);
