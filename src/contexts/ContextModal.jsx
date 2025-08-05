import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingActions, setPendingActions] = useState({
    proceed: null,
    reset: null,
  });

  const showModal = (proceed, reset) => {
    setPendingActions({ proceed, reset });
    setModalOpen(true);
  };
  const hideModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ modalOpen, pendingActions, showModal, hideModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
