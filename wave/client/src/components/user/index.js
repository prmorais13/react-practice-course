import React from 'react';

import UserLayout from '../../hoc/UserLayout';
import MyButton from '../utils/MyButton';

const UserDashboard = () => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>Informações do Usuário</h1>
          <div>
            <span>name</span>
            <span>lastname</span>
            <span>email</span>
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
