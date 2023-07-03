import React from "react";
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <h2>Nando</h2>
        <ul class="navbar-menu">
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
