import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="about" smooth={true} duration={500}>About Us</Link>
      <Link to="products" smooth={true} duration={500}>Products</Link>
      <Link to="payment" smooth={true} duration={500}>Payment</Link>
      <Link to="feedback" smooth={true} duration={500}>Feedback</Link>
    </nav>
  );
};

export default Navbar;