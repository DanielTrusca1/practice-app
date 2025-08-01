import React, { useState } from "react";

const EditForm = ({ userData }) => {
  const [userName, setUserName] = useState(userData.name);
  const [userAge, setUserAge] = useState(userData.age);

  return (
    <div className="edit-form">
      <h1>User Data Edit Form</h1>
      <p>Name:</p>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <p>Age:</p>
      <input type="text" value={userAge} onChange={(e) => setUserAge(e.target.value)} />
    </div>
  );
};

export default EditForm;
