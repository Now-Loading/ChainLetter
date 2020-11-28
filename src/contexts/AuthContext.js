import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, pass) => {
    auth.createUserWithEmailAndPassword(email, pass);
  };

  const login = (email, pass) => {
    auth.signInWithEmailAndPassword(email, pass);
  };

  const value = {
    currentUser,
    signup,
    login,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
