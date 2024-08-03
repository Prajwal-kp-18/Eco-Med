import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    const hardcodedEmail = 'test@example.com';
    const hardcodedPassword = 'password123';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      navigateTo('/admin');
    } else {
      if (email !== hardcodedEmail && password !== hardcodedPassword) {
        alert('Invalid Email And Password');
        navigateTo('/');
      } else if (email !== hardcodedEmail) {
        alert('Invalid Email ');
        navigateTo('/');
      } else {
        alert('Invalid Password ');
        navigateTo('/');
      }
    }
  };

  return (
    <div className="container">
      <div className="return">
        <NavLink to="/">
          <button className="retbn bn5">Return To Home</button>
        </NavLink>
      </div>
      <div className="glass-card">
        <h2 className="head-text">Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="bn5" type="submit">
            Login
          </button>
        </form>
        {/* {message && <p>{message}</p>} */}
        <button className="bn5">Forgot Password</button>
        <div className="sample">
          <h5>test email: test@example.com</h5>
          <h5>test password: password123</h5>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
