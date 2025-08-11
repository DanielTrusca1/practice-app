import { SmallButton } from "../reusable/SmallButton";

const Modal = ({ blocker, setIsFormDirty }) => {
  return (
    <>
      {blocker.state === "blocked" && (
        <div className="modal-background">
          <div className="confirmation-modal">
            <p>You have unsaved changes to the user form.</p>
            <p>Are you sure you want to discard the changes?</p>
            <div className="row-flex-container">
              <SmallButton
                onClick={() => {
                  blocker.reset();
                  
                }}
              >
                Cancel
              </SmallButton>
              <SmallButton
                onClick={() => {
                  blocker.proceed();
                  setIsFormDirty(false);
                }}
                $variant="danger"
              >
                Don't Save
              </SmallButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
