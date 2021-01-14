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
import Home from '@apps/Home'; // 首页

export default function RouteMap() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' exact strict component={Login} />
        <Route path='/home' exact strict component={Home} />
        <Redirect to='/login' />
      </Switch>
    </HashRouter>
  )
}