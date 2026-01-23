import React, { createContext, useContext, useState } from "react";
const UserContext = createContext(null);

export function AuthContext({ children }) {
  const [users, setUsers] = useState({});
  const login = (userData) => {
    setUsers(userData);
  };
  const logout = () => {
    setUsers(null);
  };
  return (
    <UserContext.Provider value={{ users, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const userContextData = () => useContext(UserContext);
