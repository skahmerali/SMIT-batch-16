// context/ThemeContext.jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [data, setData] = useState({
    email: "sheikhahmerali@gmail.com",
    password: "ahmer12345",
  });

  const updateUser = (newEmail, newPassword) => {
    setData({
      email: children.email,
      password: children.password,
    });
    
  };

  return (
    <UserContext.Provider value={{ data, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
