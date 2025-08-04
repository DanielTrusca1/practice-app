import { SmallButton } from "../reusable/SmallButton";

import { useContext } from "react";
import { ModalContext } from "../contexts/ContextModal";

const Modal = () => {
  // Modal Context State
  const { setIsModalActive } = useContext(ModalContext);

  // Handle Close
  const handleClose = () => {
    setIsModalActive(false);
  };

  return (
    <div className="confirmation-modal">
      <p>You have unsaved changes to the user form.</p>
      <p>Are you sure you want to discard the changes?</p>
      <div className="row-flex-container">
        <SmallButton onClick={handleClose}>Cancel</SmallButton>
        <SmallButton onClick={handleClose} $variant="danger">
          Don't Save
        </SmallButton>
      </div>
    </div>
  );
};

export default Modal;
