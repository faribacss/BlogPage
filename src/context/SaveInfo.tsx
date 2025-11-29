// Library
import { createContext, useState, ReactNode } from "react";
// Services
import { registerUser, login } from "@/services/authentication";

interface SaveInfoContextType {
  user: Record<string, unknown> | null;
  jwt: string | null;
  register: (userData: any) => Promise<any>;
  loginUser: (credentials: any) => Promise<any>;
  logout: () => void;
}

// Context
export const SaveInfoContext = createContext<SaveInfoContextType | undefined>(
  undefined
);

export const SaveInfoProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | Record<string, unknown>>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [jwt, setJwt] = useState<null | string>(() =>
    localStorage.getItem("jwt")
  );

  const saveUserData = (userData: any, jwtToken: string) => {
    setUser(userData);
    setJwt(jwtToken);
  };

  const register = async (userData: any) => {
    return await registerUser(userData, saveUserData);
  };

  const loginUser = async (credentials: any) => {
    return await login(credentials, saveUserData);
  };

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
  };

  return (
    <SaveInfoContext.Provider
      value={{ user, jwt, register, loginUser, logout }}
    >
      {children}
    </SaveInfoContext.Provider>
  );
};
