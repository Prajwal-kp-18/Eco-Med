import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Admin.css';
import { client } from '../../client';
import { NavLink } from 'react-router-dom';
import images from '../../assets/logo.png';

const Admin = () => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const query = '*[_type == "feedback"]';

    client.fetch(query).then(data => setFeedback(data));
  }, []);

  return (
    <>
      <div className="app__admin">
        <div className="app__navbar-logo">
          <NavLink to="/">
            <img src={images} alt="logo" />
          </NavLink>
        </div>
        <div className="p-text2 ">COMPLAINTS SECTION</div>
        <div className="app__profiles">
          {feedback.map((feed, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item glass-card1"
              key={feed.title + index}
            >
              <div className="cont">
                <label className="p-text1">Name: </label>
                <p className="para">{feed.name}</p>
              </div>

              <div className="cont">
                <label className="p-text1">Items Missing: </label>
                <p className="para">{feed.itemname}</p>
              </div>
              <div className="cont">
                <label className="p-text1">Complaints: </label>
                <p className="para">{feed.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
