import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css'

function NavBar() {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  };

  const onClose = () => {
    setOpen(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
         <a href="/">Logo</a>
      </div>
      <div>
        <div className="menu_left">
          <RightMenu mode='horizontal'/>
        </div>
        
      </div>
    </nav>
  )
}

export default NavBar