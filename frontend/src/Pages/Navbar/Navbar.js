import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MyLogo</div>
      <div className="navbar__buttons">
         <button className="btn register-btn"><Link to="/register">Register</Link> </button>
        <button className="btn login-btn"><Link to="/login">Login</Link></button>     
      </div>
    </nav>
  );
};

export default Navbar;
