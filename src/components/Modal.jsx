import { SmallButton } from "../reusable/SmallButton";

import { useContext } from "react";
import { ModalContext } from "../contexts/ContextModal";

import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  // Modal Context State
  const { setIsModalActive } = useContext(ModalContext);

  // Handle Close
  const handleClose = (shouldDiscard) => {
    setIsModalActive(false);

    if (shouldDiscard == true) {
      navigate("/users");
      // Refresh parent component
      navigate(0);
    }
  };

  return (
    <div className="confirmation-modal">
      <p>You have unsaved changes to the user form.</p>
      <p>Are you sure you want to discard the changes?</p>
      <div className="row-flex-container">
        <SmallButton onClick={() => handleClose(false)}>Cancel</SmallButton>
        <SmallButton onClick={() => handleClose(true)} $variant="danger">
          Don't Save
        </SmallButton>
      </div>
    </div>
  );
};

export default Modal;
