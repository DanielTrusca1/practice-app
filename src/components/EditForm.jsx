import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { users } from "../MockData";

import { useModal } from "../contexts/ContextModal";
import { useNavigationGuard } from "../hooks/useNavigationGuard.jsx";

const EditForm = () => {
  const navigate = useNavigate();

  // Get username from URI param
  const { username } = useParams();

  // User Form Data
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const isDirty = userData && (userName !== userData.name || userAge !== userData.age);
  const { showModal } = useModal();

  useNavigationGuard(isDirty, ({ proceed, reset }) => {
    showModal(
      () => proceed(),
      () => reset()
    );
  });

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
