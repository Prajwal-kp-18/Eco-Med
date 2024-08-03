import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import images from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <NavLink to="/">
          <img src={images} alt="logo" />
        </NavLink>
      </div>
      <ul className="app__navbar-links ">
        {/* {['Search', 'News', 'Game', 'Donation', 'Feedback'].map(item => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={item}>{item}</Link>
          </li>
        ))} */}
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
      <div>
        <NavLink to="/login">
          <button className="bn5 adminbtn">Admin Login</button>
        </NavLink>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {/* {['Search', 'News', 'Game', 'Donation', 'Feedback'].map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))} */}
              <NavLink
                className="small"
                onClick={() => setToggle(false)}
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className="app__flex "
                to="/search"
                onClick={() => setToggle(false)}
              >
                <li>Search</li>
              </NavLink>
              <NavLink onClick={() => setToggle(false)} to="/news">
                <li>News</li>
              </NavLink>
              <NavLink onClick={() => setToggle(false)} to="/complaints">
                <li>Complaints</li>
              </NavLink>
              <NavLink onClick={() => setToggle(false)} to="/faq">
                <li>FAQ</li>
              </NavLink>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
