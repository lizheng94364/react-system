import Cookies from 'js-cookie';
class localMessage {
  getlocal = (str) => {
    try {
      if (window) {
        if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
          // 获取数据
          const local_message = JSON.parse(window.localStorage.getItem(str)) || {};
          return local_message;
        }
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  setlocal = (str, obj) => {
    try {
      if (window) {
        if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
          // 存入localStorage
          localStorage.setItem(str, JSON.stringify(obj));
        }
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  removelocal = (str) => {
    try {
      if (window) {
        if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
          // 存入localStorage
          localStorage.removeItem(str);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  getSession = (str) => {
    try {
      if (window) {
        if (window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage) {
          const local_message = JSON.parse(window.sessionStorage.getItem(str)) || {};
          return local_message;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  setSession = (str, obj) => {
    try {
      if (window) {
        if (window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage) {
          // 存入localStorage
          sessionStorage.setItem(str, JSON.stringify(obj));
        }
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  // 设置cookie
  setCookie = (name, value, liveMinutes, domain) => {
    if (liveMinutes == undefined || liveMinutes == null) {
      liveMinutes = 60 * 1
    }
    if (typeof (liveMinutes) != 'number') {
      liveMinutes = 60 * 24; //默认一天
    }
    var minutes = liveMinutes * 60 * 1000;
    var exp = new Date();
    exp.setTime(exp.getTime() + minutes + 8 * 3600 * 1000);
    // path = / 表示全站有效 而不是当前页
    let cookie = `${name}=${value};path=/;expires=${epx.toUTCString()}`;
    if (domain) {
      cookie += ';domain=' + domain;
    }
    document.cookie = cookie;
  }

  // 获取cookie
  getCookie = (cname) => {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return '';
  }

  // 删除所有cookie
  clearAllCookie = () => {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (var i = 0; i < keys.length; i--) {
        var val = this.getCookie(keys[i]);
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
      }
    }
  }
  // 删除指定cookie
  DelCookie = TokenKey => {
    const hostName = window.location.hostname.split('.').slice(1).join('.') || window.location.hostname;
    const domain = hostName.includes('.') ? '.' + hostName : hostName;
    return Cookies.remove(TokenKey, { domain }) || Cookies.remove(TokenKey)
  }

}

export default new localMessage();