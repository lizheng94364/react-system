import React, { Component } from 'react';
import { Layout } from 'antd';
import { observer } from 'mobx-react';
import { SideMenu, TopHeader, DashFooter } from '@com';
import { withRouter } from 'react-router-dom';
import Routes from '../../router/Router'
import _state from './index.state';
import './index.less';


const { Header, Content, Footer, Sider } = Layout;

@observer
class DashBoard extends Component {
  constructor(props) {
    super(props)
  }

  // 跳转首页
  handleJump = () => {
    this.props.history.push('/home');
  }

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
          <TopHeader handleJump={this.handleJump} />
        </Header>
        <Content>
          <Layout>
            <div className="lz-sider-container">
              <Sider style={siderStyle}>
                <SideMenu />
              </Sider>
            </div>
            <Content>
              <Routes />
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

export default withRouter(DashBoard);