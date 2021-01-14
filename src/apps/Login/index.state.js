import { observable, action } from 'mobx';

class state {
  @observable userName = 'admin';
  @observable passWord = '123456';
}

export default new state();