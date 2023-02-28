import React from 'react';
import { Menu } from 'antd';

const items = [
  {
    label: <a href="/">Home</a>,
    key: "home",
  },
  {
    label: "Blog",
    key: 'blog',
  }
  
]

function LeftMenu() {
  return  <Menu mode="horizontal" items={items} />;
}

export default LeftMenu