import { observable, action, toJS } from 'mobx';
import { localMessage } from '@utils/index';
import { USER_TOKEN } from './storageKey';

class RootStore {
  //登录用户信息
  @observable userToken = null;

  @action
  setUserToken = (data) => {
    if (data) {
      localMessage.setlocal(USER_TOKEN, data.token)
      this.userToken = data.token
    }
  }
  @action
  initUserToken = async () => {
    let userToken = await localMessage.getlocal(USER_TOKEN);
    if (!!userToken && userToken) {
      userToken = userToken;
    }
    this.userToken = userToken;
    return userToken;
  };
  @action
  getUserToken = () => {
    if (!this.userToken || !this.userToken) {
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