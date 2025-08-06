import { createContext, useContext, useState } from "react";

// This ensures cancelNavigation is always a function and never undefined
const NavigationContext = createContext({
  confirmNavigation: () => {},
  cancelNavigation: () => {},
  setConfirmNavigation: () => {},
  setCancelNavigation: () => {},
});

export function NavigationProvider({ children }) {
  const [confirmNavigation, setConfirmNavigation] = useState(() => () => {});
  const [cancelNavigation, setCancelNavigation] = useState(() => () => {});

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
