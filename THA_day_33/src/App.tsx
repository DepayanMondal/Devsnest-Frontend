// import React, { FC, ReactElement } from "react";
import { useState } from "react";
import "./styles.css";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Todos from "./Todos";

interface AppProps {
  title: string;
}

// const App: FC<AppProps> = ({ title }): ReactElement => {
const App = ({ title }: AppProps) => {
  // const [counter, setCounter] = useState<number | null>(null);
  const [theme, setTheme] = useState<boolean>(false);

  // useEffect(() => {
  //   setCounter(0);
  // }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
     
      <div className={theme?"App dark":"App"}>
        <h1>{title}</h1>
        <Todos/>
        {/* {counter !== null ? (
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter}
          </button>
        ) : null} */}
       
        
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
