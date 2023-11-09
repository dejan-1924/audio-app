import { ReactNode, createContext, useEffect, useState } from "react";

export interface IAuthContext {
  login: (token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthContextProvider = (props: any) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const contextValue: IAuthContext = {
    login,
    logout,
    isLoggedIn: token ? true : false,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
