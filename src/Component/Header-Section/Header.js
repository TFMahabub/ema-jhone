import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav-container'>
      <img src={logo} alt="" />
      <div className='nav-menu'>
        <a href="/home">Order</a>
        <a href="/home">Order Review</a>
        <a href="/home">Manage Inventory</a>
        <a href="/home">Log In</a>
      </div>
    </nav>
  );
};

export default Header;