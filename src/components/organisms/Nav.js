import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Button from '../atoms/Button';
import Modal from './Modal';
import './Nav.scss';

const Nav = () => {
  const { currentUser, logout, login } = useAuthContext();
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setIsLoginClicked((prev) => !prev);
  };

  const handleLogin = (e) => {
    const { email, password } = e.target.elements;
    login(email.value, password.value);
    handleLoginClick();
  };

  const UserElements = () => {
    if (currentUser) {
      return (
        <Button
          type="button"
          clickHandler={logout}
          variant="primary"
          text="Logout"
        />
      );
    }
    return (
      <>
        <Link to="/signup">
          <Button
            type="button"
            variant="primary"
            text="Sign Up"
          />
        </Link>
        <Button
          type="button"
          clickHandler={handleLoginClick}
          variant="secondary"
          text="Login"
        />
      </>
    );
  };

  return (
    <nav>
      <h2>
        Chain Letter
      </h2>
      <section>
        <Link to="/">
          <Button
            type="button"
            variant="text"
            text="Home"
          />
        </Link>
        <Link to="/about">
          <Button
            type="button"
            variant="text"
            text="About"
          />
        </Link>
        <UserElements />
      </section>
      {
        isLoginClicked && (
          <Modal
            title="Login"
            submitHandler={handleLogin}
            confirmText="Login"
            canCancel
            cancelHandler={handleLoginClick}
          >
            <label htmlFor="email">
              Email
              <input type="text" name="email" />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" name="password" />
            </label>
          </Modal>
        )
      }
    </nav>
  );
};

export default Nav;
