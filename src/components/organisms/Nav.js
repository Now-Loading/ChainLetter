import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Button from '../atoms/Button';
import AddStory from '../templates/AddStory';
import Modal from './Modal';
import './Nav.scss';

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
const REGEX_SPECIAL_CHARACTER = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
const REGEX_EMAIL_VALID = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  const [isDisabled] = useState(true);
  const [isUsername, setUsername] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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
    const { name, email, password } = event.target.elements;
    signup(name.value, email.value, password.value);
    setModalState(modalStates.closed);
  };

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // // Disabling signup if input is empty/un-validated
  const validation = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      if (value.length > 20) {
        setNameError('Username must be less than 20 characters');
      } else if (value.length < 4) {
        setNameError('Username must be longer than 4 characters');
      } else if (REGEX_SPECIAL_CHARACTER.test(value)) {
        setNameError('Username must not contain any special characters');
      }
    }

    if (name === 'email') {
      if (REGEX_EMAIL_VALID.test(value)) {
        setEmailError('Email should be a valid email');
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        setPasswordError('Password should not be less than 8 characters');
      } else if (REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(value)) {
        setPasswordError('Password must contain 1 upper case letter, lower case letter, number and special character');
      }
    }
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
          id="buttonSubmit"
          disabled={isDisabled}
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
      {/* login modal */}
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
      {/* signup modal */}
      {
        modalState === modalStates.signup && (
          <Modal
            title="Sign Up"
            submitHandler={handleSignup}
            confirmText="Sign Up"
            cancelHandler={() => setModalState(modalStates.closed)}
          >
            <label htmlFor="name">
              Display Name
              <input
                type="text"
                name="name"
                value={isUsername}
                onChange={(e) => { handleNameChange(e); }}
                onBlur={(e) => { validation(e); }}
                required
              />
            </label>
              {nameError}
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                required
                value={isEmail}
                onChange={(e) => { handleEmailChange(e); }}
                onBlur={(e) => { validation(e); }}
              />
            </label>
              {emailError}
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={isPassword}
                onChange={(e) => { handlePasswordChange(e); }}
                onBlur={(e) => { validation(e); }}
                required
              />
            </label>
            {passwordError}
          </Modal>
        )
      }
    </nav>
  );
};

export default Nav;
