/*
 * @Descripttion: 
 * @Author: lz
 * @Date: 2020-10-23 09:17:40
 * @LastEditors: lz
 * @LastEditTime: 2020-10-23 13:58:06
 * @FilePath: /react-project/src/router/index.js
 */
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '@apps/Login'; // 登录页面
import DashBoard from '@apps/DashBoard';
import Users from '@apps/User';

export default function RouteMap() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' exact strict component={Login} />
        <Route path="/" render={() =>
          <DashBoard />
        } />

      </Switch>
    </HashRouter>
  )
}