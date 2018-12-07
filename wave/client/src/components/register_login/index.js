import React from 'react';

import MyButton from '../utils/MyButton';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>Novo Cliente</h1>
            <p>
              teste claro teste claro teste claro teste claro teste claro teste
              claro teste claro teste claro teste claro teste claro teste claro
              teste claro teste claro teste claro teste claro teste claro.
            </p>
            <MyButton
              type="default"
              title="Criar uma conta"
              linkTo="/register"
              addStyles={{ margin: '10px 0 0 0' }}
            />
          </div>
          <div className="right">
            <h2>Cliente Cadastrado</h2>
            <p>Se você já tem um conta, por favor faça login</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
