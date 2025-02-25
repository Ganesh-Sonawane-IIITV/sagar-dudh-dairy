import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://www.instagram.com/sagarnsonawane/"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>
      <p>© 2024 Sonawane Dairy Farm. All rights reserved.</p>
    </footer>
  );
};

export default Footer;