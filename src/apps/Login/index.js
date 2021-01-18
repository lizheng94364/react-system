/*
 * @Descripttion:
 * @Author: 李征
 * @Date: 2020-10-23 09:28:24
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-23 09:31:23
 * @FilePath: /react-project/src/apps/Login/index.js
 */

import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import _state from './index.state';

const FormItem = Form.Item;
const nameRules = { required: true, message: "请输入姓名" };
const passwordRules = { required: true, message: "请输入密码" };
import "./index.less";
class Login extends Component {
  formRef = React.createRef();
  componentDidMount() { }

  onFinish = (val) => {
    this.props.history.push('/home');
  };
  onFinishFailed = (val) => {
    console.log("onfinishfailed", val);
  };
  render() {
    return (
      <div className="lz-login-container">
        <div className="lz-login-box">
          <Form
            className="lz-login-form"
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            initialValues={{
              ['name']: _state.userName,
              ['password']: _state.passWord
            }}
          >
            <div className="lz-form-title">登录</div>
            <FormItem name="name" rules={[nameRules]}>
              <Input placeholder="name" className="lz-form-item-input" />
            </FormItem>
            <FormItem name="password" rules={[passwordRules]}>
              <Input placeholder="password" className="lz-form-item-input" />
            </FormItem>
            <FormItem className="lz-form-button">
              <Button type="primary" className="lz-submit" size="large" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
