import React, { useState } from 'react';
import './index.css';
import { BsPersonCircle } from 'react-icons/bs';

export const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEmailBlur = (e) => {
    const { value } = e.target;
    if (value.includes('@')) {
      const userNameFromEmail = value.split('@')[0];
      setUser((prevUser) => ({
        ...prevUser,
        username: prevUser.username || userNameFromEmail,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <BsPersonCircle size={70} />
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className="formstyle">
        <label>
          Email Address{' '}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleUser}
            onBlur={handleEmailBlur}
          />
        </label>
        <label>
          User Name{' '}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleUser}
          />
        </label>
        <label>
          Password{' '}
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleUser}
          />
        </label>
        <label>
          Confirm Password{' '}
          <input
            type="password"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleUser}
          />
        </label>
        <div className="submitbutton">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};
