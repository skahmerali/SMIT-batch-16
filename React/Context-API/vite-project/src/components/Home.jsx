// components/Navbar.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme}`}>
      <span>Current Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}
