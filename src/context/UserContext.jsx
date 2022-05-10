import React from 'react';
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null });
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
