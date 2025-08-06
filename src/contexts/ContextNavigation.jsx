import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [confirmNavigation, setConfirmNavigation] = useState(null);
  const [cancelNavigation, setCancelNavigation] = useState(null);

  return (
    <NavigationContext.Provider
      value={{
        confirmNavigation,
        setConfirmNavigation,
        cancelNavigation,
        setCancelNavigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useCustomNavigation = () => useContext(NavigationContext);
