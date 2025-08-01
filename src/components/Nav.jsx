import React from "react";

import { Button } from "../reusable/Button";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/about")}>About</Button>
      <Button onClick={() => navigate("/users")}>Users</Button>
    </div>
  );
};

export default Nav;
