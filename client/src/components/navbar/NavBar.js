import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/login" className="navbar-logo">
        <img className="navbar-logo" src="/assets/logo.png" alt="logo" />
        LUXERIA
      </Link>
      <ul className="nav-items">
        {navItems.map((item) => {
          if (item.title === "Admin" && localStorage.getItem("role") === "admin") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                <Link className="nav-item-link" to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
              </li>
            );
          }
          if ((item.title === "Admin" && localStorage.getItem("role") !== "admin")) { return }
          return (
            <li key={item.id} className={item.cName}>
              <Link className="nav-item-link" to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      {localStorage.getItem("token") && <Button />}
      <Link to="/checkout"><img className="shopping-cart-logo" src="/assets/shopping-cart2.png" alt="shopping-cart2" /></Link>
    </nav>
  );
}

export default Navbar;

