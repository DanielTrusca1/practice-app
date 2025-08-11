import { SmallButton } from "../reusable/SmallButton";

import { useModal } from "../contexts/ContextModal";

// Custom navigation context for state
import { useCustomNavigation } from "../contexts/ContextNavigation";

const Modal = () => {
  // Should the modal be open ?
  const { isModalOpen } = useModal();

  // Modal actions for confirm/cancel
  const { confirmNavigation, cancelNavigation } = useCustomNavigation();

  // Hide modal
  // if (!isModalOpen) return null;

  const blocker = {
    state: "",
  };

  return (
    <>
      {
        blocker.state === "blocked" && 
        <div className="modal-background">
          <div className="confirmation-modal">
            <p>You have unsaved changes to the user form.</p>
            <p>Are you sure you want to discard the changes?</p>
            <div className="row-flex-container">
              <SmallButton
                onClick={() => {
                  cancelNavigation();
                }}
              >
                Cancel
              </SmallButton>
              <SmallButton
                onClick={() => {
                  confirmNavigation();
                }}
                $variant="danger"
              >
                Don't Save
              </SmallButton>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Modal;
