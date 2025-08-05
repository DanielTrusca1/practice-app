import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useContext } from "react";

import { ModalContext } from "../contexts/ContextModal";

import { users } from "../MockData";

const EditForm = () => {
  const navigate = useNavigate();

  const { username } = useParams();

  // Modal Context State
  const { setIsModalActive } = useContext(ModalContext);

  // User Form Data
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

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
    // Open modal on data changed
    if (userData.name !== userName || userData.age !== userAge) {
      setIsModalActive(true);
    } else {
      navigate("/users");
      // Refresh parent component
      navigate(0);
    }
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
