import React, { useState, useEffect } from "react";

import { useNavigate, useParams, useOutletContext } from "react-router-dom";

import { users } from "../MockData";

import { useModal } from "../contexts/ContextModal";

// Custom navigation blocker
import useNavigationBlocker from "../hooks/useNavigationBlocker";

// Custom navigation context for state
import { useCustomNavigation } from "../contexts/ContextNavigation";

const EditForm = () => {
  const props = useOutletContext();

  const navigate = useNavigate();

  // Get username from URI param
  const { username } = useParams();

  // User Form Data
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  // On change of input, check if form is dirty and update app state
  useEffect(() => {
    if (userData == null || userName == null || userAge == null) return;

    // console.log(userData.name, userName, userData.age, userAge);

    if (
      userName !== userData.name ||
      String(userAge) !== String(userData.age)
    ) {
      props.setIsFormDirty(true);
      console.log("The form is dirty");
    } else {
      props.setIsFormDirty(false);
      console.log("The form is clean");
    }
  }, [userName, userAge]);

  const { setIsModalOpen } = useModal();

  const isDirty = false;

  // Extract confirm/cancel actions from useNavigationBlocker
  // And actually block the navigation attempt (via the custom hook) IF the form is dirty
  const { confirmNavigation, cancelNavigation } = useNavigationBlocker(
    isDirty, // because the hook needs to know
    () => setIsModalOpen(true), // because the hook needs to be able to display (open) the modal
    () => setIsModalOpen(false) // because the hook actions need to close the modal
  );

  // Pull the callback functions to the navigation context
  const { setConfirmNavigation, setCancelNavigation } = useCustomNavigation();
  useEffect(() => {
    setConfirmNavigation(() => confirmNavigation);
    setCancelNavigation(() => cancelNavigation);
  }, [confirmNavigation, cancelNavigation]);

  // Get user data from username URI param
  useEffect(() => {
    // Search for user info in the mock data
    const filteredUserData = users.filter((user) => user.name === username)[0];

    // Update user data
    setUserData(filteredUserData);
  }, []);

  // Update user edit form fields on user data change
  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setUserAge(userData.age);
    }
  }, [userData]);

  // Handle Close
  const handleClose = () => {
    navigate("/users");
  };

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
