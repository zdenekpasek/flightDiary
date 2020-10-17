import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const AuthScreen = () => {
  const { tryLocalLogin, errorMsg, token } = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin();
  }, []);
  return null;
};

export default AuthScreen;
