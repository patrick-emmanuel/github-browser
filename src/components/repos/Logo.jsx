import React from "react";
import logo from "../../assets/github_logo.png";

const Logo = () => (
  <div className="logo" data-testid="logo">
    <img src={logo} alt="Logo" width="150" height="120" />
    <p>GitHub Users</p>
  </div>
);

export default Logo;
