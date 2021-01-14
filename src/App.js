import React, { Component } from 'react';
import RouteMap from './router/index';
import './styles/app.less';

// 根组件
class App extends Component {
  render() {
    return <RouteMap />
  }
}
export default App;