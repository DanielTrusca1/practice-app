import React, { useEffect } from "react";

// Render child components of the nested routes
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { users } from "../MockData";

const Users = () => {
  const navigate = useNavigate();

  const handleSelectUser = (usernameArg) => {
    // Navigate to the user profile edit form route
    navigate(`/users/${usernameArg}`);
    navigate(0);
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
      <Outlet />
    </div>
  );
};

export default Users;
