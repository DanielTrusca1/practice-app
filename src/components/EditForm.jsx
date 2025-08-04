import React, { useState } from "react";

import { useContext } from "react";
import { ModalContext } from "../contexts/ContextModal";

const EditForm = ({ userData }) => {
  // Modal Context State
  const { setIsModalActive } = useContext(ModalContext);

  // User Form Data
  const [userName, setUserName] = useState(userData.name);
  const [userAge, setUserAge] = useState(userData.age);

  // Handle Close
  const handleClose = () => {
    setIsModalActive(true);
  }

  return (
    <div className="edit-form">
      <h1>User Data Edit Form</h1>
      <p>Name:</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Age:</p>
      <input
        type="text"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />
      <button onClick={handleClose}>x</button>
    </div>
  );
};

export default EditForm;
