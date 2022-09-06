import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="/login">
      <button className="btn">Sign In</button>
    </Link>
  );
}

export default Button;