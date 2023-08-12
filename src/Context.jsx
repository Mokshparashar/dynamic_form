import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const states = { name, setName, number, setNumber, age, setAge };
  return (
    <AppContext.Provider value={{ ...states }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
