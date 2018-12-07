import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Layout from './hoc/Layout';
import RegisterLogin from './components/register_login';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
