"use client";

import { LogtoContext } from "@logto/next/server-actions";
import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  logtoContext: LogtoContext;
  children: React.ReactNode;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ logtoContext, children, signIn, signOut }) => {
  const [user, setUser] = useState<User | null>(null);

  React.useEffect(() => {
    async function fetchUser() {   
      if (logtoContext.isAuthenticated) {
        const profile = logtoContext.claims;
        if (!profile) {
          setUser(null);
          return;
        }
        setUser({
          id: profile.sub,
          name: profile.name || "Unknown User",
          email: profile.email || "",
          picture: profile.picture || undefined,
        });
      } else {
        setUser(null);
      }
    }
    fetchUser();
  }, [logtoContext]);

  const value: AuthContextType = {
    isAuthenticated: !!user,
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
