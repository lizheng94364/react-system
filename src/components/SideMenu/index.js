import React, { Component, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { Menu } from 'antd';
import sideMenu from '@config/sideList';

const { SubMenu } = Menu;
import './index.less';





export function SideMenu(props) {
  let history = useHistory();
  const renderMenu = useCallback(menu => {
    return menu.map(item => {
      if (item.children) {
        return (
          //重：将每个渲染的标题都设置key（就是数据中定义的path="/home"）用于做编程试导航和菜单高亮
          <SubMenu key={item.path} title={
            <span>{item.title}</span>
          }>
            {  //递归用法
              renderMenu(item.children)
            }
          </SubMenu>)
      } else {
        return (
          // 重：将每个渲染的标题都设置key（就是数据中定义的path="/home"）用于做编程试导航和菜单高亮
          <Menu.Item key={item.path}>
            {item.title}
          </Menu.Item>
        )
      }
    })
  }, []);
  const handleChangePage = useCallback(obj => {
    console.log(obj);
    // 高阶组件提供
    history.push(obj.key)//key路由对应的路径,进行点击每一个标题的时候，条状到响应的路由去
  }, [])

  return (
    <div className="lz-side-menu">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        onClick={handleChangePage}
      >
        {renderMenu(sideMenu)}
      </Menu>
    </div>
  )
}