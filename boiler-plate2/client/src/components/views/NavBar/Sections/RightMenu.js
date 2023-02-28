import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const items = [
  {
    label: <a href="/">Home</a>,
    key: "home",
  },
  {
    label: "Blog",
    key: 'blog',
  },
  {
    label: <a href="/login">Sign in</a>,
    key: 'mail'
  },
  {
    label: <a href="/register">Sign up</a>,
    key: 'app'
  },
];

const logoutItem = [
  {
    label:  <a href="/">Logout</a>,
    key: 'logout'
  },
];

function RightMenu() {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    axios.get(`/api/users/logout`).then(response => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return <Menu mode="horizontal" items={items}/>;
    
  } else {
    return <Menu mode="horizontal" items={logoutItem} onClick={logoutHandler}/>;
    
  }
}

export default RightMenu;