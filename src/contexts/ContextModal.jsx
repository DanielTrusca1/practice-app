import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const value = { isModalActive, setIsModalActive };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
