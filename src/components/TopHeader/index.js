import React from 'react';
import './index.less';

export function TopHeader({ handleJump = () => { } }) {
  return (
    <div className="container-header">
      <div className="header-left" onClick={handleJump}><h3>前端小菜鸟-admin</h3></div>
      <div className="header-right">右边内容</div>
    </div>
  )
}