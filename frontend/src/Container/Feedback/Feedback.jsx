import React, { useState } from 'react';
import './Feedback.scss';
import { client } from '../../client';
import email from '../../assets/email.png';
import phone from '../../assets/mobile.png';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    itemname: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, itemname, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'feedback',
      name: formData.username,
      itemname: formData.itemname,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="app-foot-mains">
      <h2 className="head-text"></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={email} alt="email" />
          <a href="mailto:EcoMed@gmail.com" className="p-text">
            EcoMed@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={phone} alt="phone" />
          <a href="tel:+91 9876556789">+91 9876556789</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app-feed-main">
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text white-bg"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text white-bg"
                type="text"
                placeholder="Item Name"
                name="itemname"
                value={itemname}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text white-bg"
                placeholder="Add Any Complaints"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text bn5" onClick={handleSubmit}>
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="head-text text-gg">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};
// export
export default Feedback;
