

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h3>Zone Strike Boots</h3>
      </div>
      <div className="brand-list">
        <button>Nike</button>
        <button>Adidas</button>
        <button>Puma</button>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;