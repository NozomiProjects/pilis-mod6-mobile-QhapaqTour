import { createContext, useState } from "react";

export const RecorridosContext = createContext({
  recorridos: [],
  setRecorridos: () => {}
})

export const RecorridosProvider = ({ children }) => {
  const [recorridos, setRecorridos] = useState([]);
  const value = { recorridos, setRecorridos };

  return <RecorridosContext.Provider value={value}>{children}</RecorridosContext.Provider>;
}