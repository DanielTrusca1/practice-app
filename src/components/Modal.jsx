import { SmallButton } from "../reusable/SmallButton";

import { useModal } from "../contexts/ContextModal";

import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  // Modal Context State
  const { modalOpen, pendingAction, hideModal } = useModal();

  if (!modalOpen) return null;

  const onConfirm = () => {
    // Actually navigate
    pendingAction?.();
    hideModal();
    //navigate("/users"); // then go to /users
  };
  const onCancel = () => hideModal();

  return (
    <div className="modal-background">
      <div className="confirmation-modal">
        <p>You have unsaved changes to the user form.</p>
        <p>Are you sure you want to discard the changes?</p>
        <div className="row-flex-container">
          <SmallButton onClick={onCancel}>Cancel</SmallButton>
          <SmallButton onClick={onConfirm} $variant="danger">
            Don't Save
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
