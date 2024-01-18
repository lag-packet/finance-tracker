// Header.js
import React from "react";
import logo from "../imgs/logo.png";

function Header() {
  return (
    <header className="finance-header text-center my-4">
      <img className="mx-auto" src={logo} width="200px" height="auto"></img>
    </header>
  );
}

export default Header;
