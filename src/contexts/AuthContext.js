import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, pass, displayName) => {
    auth.createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        const { user } = userCredential;
        const userDocument = {
          id: user.uid,
          email,
          displayName,
        };
        console.log(userDocument);
      });
    // need to add error handling?
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    // });
  };

  const login = (email, pass) => {
    auth.signInWithEmailAndPassword(email, pass);
  };

  const logout = () => {
    auth.signOut();
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
