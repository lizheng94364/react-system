/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-23 09:30:07
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-23 13:58:32
 * @FilePath: /react-project/src/apps/Home/index.js
 */
import React from 'react';
import { observer } from 'mobx-react';
import _state from './index.state';
import './index.style.less';

function Home() {
  return (
    <div id="home">
      {_state.name}
    </div>
  )
}
export default observer(Home);

