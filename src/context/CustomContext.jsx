import { createContext, useContext, useState } from "react";

const CustomContext = createContext();

export function useCustomData() {
  return useContext(CustomContext);
}

export function CustomDataProvider({ children }) {
  //States
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Manage changes: funtions to export through the context component
  const changeSideBar = () => {
    setShowSideBar(!showSideBar);
  }
  const changeAbout = () => {
    setShowAbout(!showAbout);
  }
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <CustomContext.Provider value={{showSideBar, changeSideBar, showAbout, changeAbout, darkMode, changeDarkMode}}>
      {children}
    </CustomContext.Provider>
  );
}