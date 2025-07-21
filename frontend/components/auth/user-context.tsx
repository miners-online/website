"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  email?: string;
  name?: string;
  picture?: string;
  initials?: string;
}

interface UserContextType {
  user?: User;
  setUser: (user?: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children, initialUser }: { children: ReactNode, initialUser?: User }) => {
  const [user, setUser] = useState<User | undefined>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
