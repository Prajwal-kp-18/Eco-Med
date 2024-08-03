import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer>
      <div class="footerContainer">
        <div class="socialIcons">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaSquareXTwitter />
          </a>
        </div>
        <div class="footerNav">
          <ul>
            <NavLink className="app__flex p-text" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink className="app__flex p-text" to="/search">
              <li>Search</li>
            </NavLink>
            <NavLink className="app__flex p-text" to="/news">
              <li>News</li>
            </NavLink>
            <NavLink className="app__flex p-text" to="/complaints">
              <li>Complaints</li>
            </NavLink>
            <NavLink className="app__flex p-text" to="/faq">
              <li>FAQ</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div class="footerBottom">
        <p>Copyright &copy;2024 EcoMed </p>
      </div>
    </footer>
  );
};

export default Footer;
