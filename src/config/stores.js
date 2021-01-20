import { observable, action, toJS } from 'mobx';
import { localMessage } from '@utils/index';
import { USER_TOKEN } from './storageKey';

class RootStore {
  //登录用户信息
  @observable userToken = null;

  @action
  setUserToken = () => {
    localMessage.setlocal(USER_TOKEN, 'lizheng')
  }
  @action
  initUserToken = async () => {
    let userToken = await localMessage.getlocal(USER_TOKEN);
    if (!!userToken && userToken.name) {
      userToken = userToken.name;
    }
    this.userToken = userToken;
    return userToken;
  };
  @action
  getUserToken = () => {
    if (!this.userToken || !this.userToken.name) {
      this.initUserToken();
    }
    return this.userToken || {};
  };

  @action
  removeUserToken = () => {
    localMessage.removelocal(USER_TOKEN);
    this.userToken = null;
  };
}

export default new RootStore();