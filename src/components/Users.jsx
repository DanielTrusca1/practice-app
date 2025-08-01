import React from "react";

import { users } from "../MockData";

const Users = () => {
  return (
    <div className="users">
      <h1>❯ Users</h1>
      <p>List of users:</p>
      {
        // Display all users programatically
        users.map((u, i) => {
          return (
            <div className="list-item" key={i}>
              <p>Name: {u.name}</p>
              <p>Age: {u.age}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Users;
