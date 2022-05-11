import React from 'react';
import { createContext, useContext, useState } from 'react';
import { getUser, signInUser } from '../services/user';

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

  const logout = async () => {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  console.log('context', context);
  if (context === undefined) {
    throw new Error('useUser must be used within a User Provider');
  }
  return context;
};
