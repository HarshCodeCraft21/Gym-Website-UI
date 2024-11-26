import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={toggleMobileMenu}>
        <span role="img" aria-label="dumbbell">🏋️‍♂️</span> Hercules Gym
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <li><Link to="/" className="active link">Home</Link></li>
        <li><Link to="/about" className='link'>About Us</Link></li>
        <li><Link to="/pricing" className='link'>Pricing</Link></li>
        <li><Link to="/contact" className='link'>Contact</Link></li>
      </ul>
    </nav>
  );
};
