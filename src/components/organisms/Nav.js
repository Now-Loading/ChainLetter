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
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
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
    const { email, password } = event.target.elements;
    signup(email.value, password.value);
    setModalState(modalStates.closed);
  };

  const handleNameChange = (event) => {
    setUsernameInput(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  // // Disabling signup if input is empty/un-validated
  const validation = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      if (value.length > 20) {
        setNameError('Username must be longer than 4 characters, less than 20 characters, and must not contain any special characters');
      } else if (value.length < 4) {
        setNameError('Username must be longer than 4 characters, less than 20 characters, and must not contain any special characters');
      } else if (REGEX_SPECIAL_CHARACTER.test(value)) {
        setNameError('Username must be longer than 4 characters, less than 20 characters, and must not contain any special characters');
      } else setNameError('');
    }

    if (name === 'email') {
      if (REGEX_EMAIL_VALID.test(value)) {
        setEmailError('');
      } else setEmailError('Email should be a valid email');
    }

    if (name === 'password') {
      if (value.length < 8) {
        setPasswordError('Password should not be less than 8 characters, must contain 1 upper case letter, lower case letter, number and special character');
      } else if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(value)) {
        setPasswordError('Password should not be less than 8 characters, must contain 1 upper case letter, lower case letter, number and special character');
      } else setPasswordError('');
    }
    const button = document.querySelectorAll('button');
    if (usernameInput < 1 && emailInput < 1 && passwordInput < 1) {
      console.log(button);
      button[5].disabled = true;
    } else button[5].disabled = false;
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
                value={usernameInput}
                onChange={handleNameChange}
                onBlur={validation}
                required
              />
            </label>
            <p>{nameError}</p>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                value={emailInput}
                onChange={handleEmailChange}
                onBlur={validation}
                required
              />
            </label>
            <p>{emailError}</p>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={passwordInput}
                onChange={handlePasswordChange}
                onBlur={validation}
                required
              />
            </label>
            <p>{passwordError}</p>
          </Modal>
        )
      }
    </nav>
  );
};

export default Nav;
