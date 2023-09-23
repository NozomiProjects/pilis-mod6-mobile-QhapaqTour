import { createContext, useState } from "react";

export const RegionContext = createContext({
  region: '',
  setRegion: () => {}
})

export const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState('');
  const value = { region, setRegion };

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}