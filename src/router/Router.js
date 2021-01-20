import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '@apps/Home';
import User from '@apps/User';



export default function Routers() {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/user-manage/users" exact component={User} />
      <Redirect from="/" to="/home" exact />
      <Redirect to="/home" />
    </Switch>
  )
}