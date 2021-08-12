import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";
import "./styles.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <button className={theme?"todo-theme dark":"todo-theme"} onClick={() => setTheme(!theme)}>{theme ? "Light" : "Dark"}</button>
  );
};

export default ThemeToggle;
