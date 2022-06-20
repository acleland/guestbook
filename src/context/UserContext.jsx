import React from 'react';
import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signOutUser, signUpUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const login = async (email, password) => {
    const resp = await signInUser({ email, password });

    if (resp) {
      setUser(resp);
    }
  };

  const signup = async (email, password) => {
    const resp = await signUpUser({ email, password });
    if (resp) {
      setUser(resp);
    }
  };

  const logout = async () => {
    const signOut = await signOutUser();
    setUser(signOut);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a User Provider');
  }
  return context;
};
