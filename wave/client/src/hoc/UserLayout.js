import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'Minha Conta',
    linkTo: '/user/dashboard'
  },
  {
    name: 'Informação do Usuário',
    linkTo: '/user/user_profile'
  },
  {
    name: 'Meu Carrinho',
    linkTo: '/user/user_cart'
  }
];

const UserLayout = props => {
  const generateLinks = links =>
    links.map((item, i) => (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ));

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2>Minha Conta</h2>
          <div className="links">{generateLinks(links)}</div>
        </div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
