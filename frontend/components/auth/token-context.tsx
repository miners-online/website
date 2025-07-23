"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface TokenContextValue {
  token: string | null;
  setToken: (token: string | null) => void;
}

const TokenContext = createContext<TokenContextValue | undefined>(undefined);

export function TokenProvider({ children, initialToken }: { children: ReactNode, initialToken?: string }) {
  const [token, setToken] = useState<string | null>(initialToken || null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
}

export function useSetToken() {
  const { setToken } = useToken();
  return setToken;
}