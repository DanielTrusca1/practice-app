import { SmallButton } from "../reusable/SmallButton";

// Custom navigation context for state
import { useCustomNavigation } from "../contexts/ContextNavigation";

const Modal = () => {
  const { confirmNavigation, cancelNavigation } = useCustomNavigation();

  return (
    <div className="modal-background">
      <div className="confirmation-modal">
        <p>You have unsaved changes to the user form.</p>
        <p>Are you sure you want to discard the changes?</p>
        <div className="row-flex-container">
          <SmallButton onClick={cancelNavigation}>Cancel</SmallButton>
          <SmallButton onClick={confirmNavigation} $variant="danger">
            Don't Save
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
