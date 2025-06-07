"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface User {
  id: string;
  email?: string;
  name?: string;
  picture?: string;
  initials?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

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

export function UserLoader({ children, user }: { children: ReactNode, user?: User }) {
  const { setUser } = useUser();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
    // Only run when `user` changes
  }, [user, setUser]);

  return <>{children}</>;
};