const sideMenu = [
  { // 一级菜单
    title: '首页',
    name: 'Home',
    path: '/home'
  },
  {
    title: '用户管理',
    name: 'UserManage',
    path: '/user-manage',
    children: [ // 二级菜单
      {
        title: '用户列表',
        name: 'Users',
        path: '/user-manage/users'
      }
    ]
  }
]

export default sideMenu;