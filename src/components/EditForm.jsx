import React, { useState, useEffect } from "react";

import { useNavigate, useParams, useOutletContext } from "react-router-dom";

import { users } from "../MockData";

const EditForm = () => {
  const props = useOutletContext();

  const navigate = useNavigate();

  // Get username from URI param
  const { username } = useParams();

  // User Form Data
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);

  // On change of input, check if form is dirty and update app state
  useEffect(() => {
    if (userData == null || userName == null || userAge == null) return;

    // console.log(userData.name, userName, userData.age, userAge);

    if (
      userName !== userData.name ||
      userAge !== userData.age
    ) {
      props.setIsFormDirty(true);
      console.log("The form is dirty");
    } else {
      props.setIsFormDirty(false);
      console.log("The form is clean");
    }
  }, [userName, userAge]);

  // Get user data from username URI param
  useEffect(() => {
    // Search for user info in the mock data
    const filteredUserData = users.filter((user) => user.name === username)[0];

    // Update user data
    setUserData(filteredUserData);
  }, [username]);

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
        onChange={(e) => setUserAge(Number(e.target.value))}
      />
      <button onClick={handleClose}>x</button>
    </div>
  );
};

export default EditForm;
