import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { observer } from 'mobx-react';
import { SideMenu, TopHeader, DashFooter } from '@com';
import { Route, Redirect, Switch } from 'react-router-dom';
import _state from './index.state';
import './index.less';
import Home from '@apps/Home';
import User from '@apps/User';

const { Header, Content, Footer, Sider } = Layout;

@observer
class DashBoard extends Component {

  render() {
    let siderStyle = {
      flex: '0 0 0 170px',
      width: '170px',
      maxWidth: '170px',
      minWidth: '170px',
      width: '170px',
      display: "block",
      height: '100%'
    }
    return (
      <Layout className="lz-box-container">
        <Header>
          <TopHeader />
        </Header>
        <Content>
          <Layout>
            <div className="lz-sider-container">
              <Sider style={siderStyle}>
                <SideMenu />
              </Sider>
            </div>
            <Content>
              <Switch>
                {/* home路由 */}
                <Route path="/home" component={Home} />
                <Route path="/user-manage/users" component={User} />
                <Redirect from="/" to="/home" exact />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer>
          <DashFooter />
        </Footer>
      </Layout>
    )
  }
}

export default DashBoard;