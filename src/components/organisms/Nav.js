import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Button from '../atoms/Button';
import Modal from './Modal';
import './Nav.scss';

const modalStates = {
  closed: 'CLOSED',
  login: 'LOGIN',
  signup: 'SIGNUP',
};

const Nav = () => {
  const {
    currentUser,
    logout,
    login,
    signup,
  } = useAuthContext();
  const [modalState, setModalState] = useState(modalStates.closed);

  // const handleModalState = (e) => setModalState(e.value);

  const handleLogin = (e) => {
    const { email, password } = e.target.elements;
    login(email.value, password.value);
    setModalState(modalStates.closed);
  };

  const handleSignup = (e) => {
    const { email, password } = e.target.elements;
    signup(email.value, password.value);
    setModalState(modalStates.closed);
  };

  const UserElements = () => {
    if (currentUser) {
      return (
        <>
          <Button
            type="button"
            clickHandler={logout}
            variant="text"
            text="Logout"
          />
          <Link to="/link">
            <Button
              type="button"
              variant="primary"
              text="+"
            />
          </Link>
        </>
      );
    }
    return (
      <>
        <Button
          type="button"
          clickHandler={() => setModalState(modalStates.signup)}
          variant="primary"
          text="Sign Up"
        />
        <Button
          type="button"
          clickHandler={() => setModalState(modalStates.login)}
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
        modalState === modalStates.login && (
          <Modal
            title="Login"
            submitHandler={handleLogin}
            confirmText="Login"
            canCancel
            cancelHandler={() => setModalState(modalStates.closed)}
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
      {
        modalState === modalStates.signup && (
          <Modal
            title="Sign Up"
            submitHandler={handleSignup}
            confirmText="Sign Up"
            canCancel
            cancelHandler={() => setModalState(modalStates.closed)}
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
