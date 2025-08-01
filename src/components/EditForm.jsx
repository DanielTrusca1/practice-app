import React from "react";

const EditForm = ({ userData }) => {
  return (
    <div className="edit-form">
      <h1>User Data Edit Form</h1>
      <p>
        Name: {userData.name}
      </p>
      <p>
        Age: {userData.age}
      </p>
    </div>
  );
};

export default EditForm;
