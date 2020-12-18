import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Button from '../atoms/Button';
import AddStory from '../templates/AddStory';
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
  const [isAddingStory, setIsAddingStory] = useState(false);

  /**
   * Take values from form to attempt a login
   * @param {Object} event
   */
  const handleLogin = (event) => {
    const { email, password } = event.target.elements;
    login(email.value, password.value);
    setModalState(modalStates.closed);
  };

  /**
   * Take values from form to attempt a signup
   * @param {Object} event
   */
  const handleSignup = (event) => {
    const { email, password } = event.target.elements;
    signup(email.value, password.value);
    setModalState(modalStates.closed);
  };

  /**
   * Elements specific to being logged in/authenticated
   */
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
          <Button
            type="button"
            variant="primary"
            text="+"
            clickHandler={() => setIsAddingStory(true)}
          />
          { isAddingStory && <AddStory toggleModal={setIsAddingStory} />}
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
