import React from "react";
import { CartIcon } from "../Icons/Icon";

import "./Nav.css";
const Nav = ({ className, style }) => {
  return (
    <nav style={style} className={className}>
      <div className="nav-logo">
        <h2>Chacha</h2>
      </div>

      <div className="nav-link">
        <ul className="nav-links">
          <li>Collections</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="cart">
        <li>
          {" "}
          <CartIcon style={{ color: "white" }} />{" "}
        </li>
      </div>
    </nav>
  );
};

export default Nav;
