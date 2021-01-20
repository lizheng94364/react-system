import React, { Component } from 'react';
import RouteMap from './router/index';
import './styles/app.less';
import RouteState from '@config/stores';
// 根组件
class App extends Component {
  render() {
    let TOKEN = RouteState.getUserToken();
    return <RouteMap />
  }
}
export default App;