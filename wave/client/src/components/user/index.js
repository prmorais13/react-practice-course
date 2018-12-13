import React from 'react';

import UserLayout from '../../hoc/UserLayout';
import MyButton from '../utils/MyButton';

const UserDashboard = ({ user }) => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>Informações do Usuário</h1>
          <div>
            <span>{user.userData.name}</span>
            <span>{user.userData.lastname}</span>
            <span>{user.userData.email}</span>
          </div>
          <MyButton
            type="default"
            title="Editar conta"
            linkTo="/user/user_profile"
          />
        </div>
        <div className="user_nfo_panel">
          <h1>Histórico de compras</h1>
          <div className="user_product_block_wrapper">History</div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
