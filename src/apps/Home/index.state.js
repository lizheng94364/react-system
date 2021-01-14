/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-23 09:30:13
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-23 09:52:54
 * @FilePath: /react-project/src/apps/Home/state.js
 */
import { observable } from 'mobx';


class loginState {
  @observable name = 'hello home';
}

export default new loginState();