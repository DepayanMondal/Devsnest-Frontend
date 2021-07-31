import React from "react";

// Reference - https://github.com/AlterClassIO/react-custom-hooks/blob/master/src/useLocalStorage.js
const useLocalStorage = (key = "", initValue = "") => {
  const [state, setstate] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      console.error(`Error encountered in useLocalStorage Hook: ${error}`);
      return initValue;
    }
  });

  const setLocalStorageState = (newState) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setstate(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
      console.info(`${key}: ${newState} stored in the localStorage`);
    } catch (error) {
      console.error(`Unable to store new value ${key} in localStorage.`);
    }
  };
  return [state, setLocalStorageState];
};

export default useLocalStorage;
