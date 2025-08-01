import React, { useEffect } from "react";

import { users } from "../MockData";

import EditForm from "./EditForm";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const { username } = useParams();

  const [userData, setUserData] = useState(null);

  // Run initial fetch in case username is already provided in URL
  useEffect(() => {
    if (username != null) {
      // Search for user info in the mock data
      const d = users.filter((u) => u.name == username)[0];

      setUserData(d);
    }
  }, []);

  const handleSelectUser = (username_arg) => {
    // Search for user info in the mock data
    const d = users.filter((u) => u.name == username_arg)[0];

    // Update selected user data state
    setUserData(d);

    // Navigate to the user profile edit form route
    navigate(`/users/${username_arg}`);
  };

  return (
    <div className="users">
      <h1>❯ Users</h1>
      <p>List of users:</p>
      {
        // Display all users programatically
        users.map((u, i) => {
          return (
            <div
              className="list-item"
              key={i}
              onClick={() => handleSelectUser(u.name)}
            >
              <p>Name: {u.name}</p>
              <p>Age: {u.age}</p>
            </div>
          );
        })
      }

      {userData != null && <EditForm userData={userData} />}
    </div>
  );
};

export default Users;
