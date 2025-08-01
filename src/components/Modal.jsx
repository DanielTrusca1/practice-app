import React from "react";

import { SmallButton } from "../reusable/SmallButton";

const Modal = () => {
  return (
    <div className="confirmation-modal">
      <p>You have unsaved changes to the user form.</p>
      <p>Are you sure you want to discard the changes?</p>
      <div className="row-flex-container">
        <SmallButton>Cancel</SmallButton>
        <SmallButton $variant="danger">Don't Save</SmallButton>
      </div>
    </div>
  );
};

export default Modal;
