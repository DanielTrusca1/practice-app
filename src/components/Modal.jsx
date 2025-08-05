import { SmallButton } from "../reusable/SmallButton";

import { useModal } from "../contexts/ContextModal";

const Modal = () => {
  // Modal Context State
  const { modalOpen, pendingAction, hideModal } = useModal();

  if (!modalOpen) return null;

  const onConfirm = () => {
    // Actually navigate
    pendingAction?.();
    hideModal();
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
