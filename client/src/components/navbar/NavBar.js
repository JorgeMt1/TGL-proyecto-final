import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/login" className="navbar-logo">
          <img className="navbar-logo" src="assets/logo.png" alt="logo" />
          LUXERIA
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Categories" && localStorage.getItem("role")=== "admin") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            if((item.title === "Categories" && localStorage.getItem("role") !== "admin")){return}
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
        <Link to="/checkout"><img className="shopping-cart-logo" src="assets/shopping-cart.png" alt="cart-logo" /></Link>
      </nav>
    </>
  );
}

export default Navbar;

