import { createCookie, deleteCookie, getCookie } from '@/utils/cookie';
import React, { useState, createContext, useContext } from 'react';

interface AuthContextType {
  token: string | null;
  login: (userData: { token: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    const cookieData = getCookie<string>('__app_tkn');
    return cookieData ? cookieData : null;
  });

  const login = (data: { token: string }) => {
    setToken(data.token);
    createCookie('__app_tkn', data.token);
  };

  const logout = () => {
    setToken(null);
    deleteCookie('__app_tkn');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
