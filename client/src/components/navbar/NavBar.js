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
        <Link to="/" className="navbar-logo">
          LUXERIA
          <img className="nabar-logos" src="assets/logo.png" alt="logo" />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
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
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
        <a href="./checkout"><img className="shopping-cart-logo" src="assets/shopping-cart.png" alt="cart-logo" /></a>
      </nav>
    </>
  );
}

export default Navbar;


/*export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='navbar-logo' src='assets/shopping-logo.png' alt='logo' />
      </div>
      <div className='navbar-right'>
        <ul>
          <li><a href=''>New</a></li>
          <li><a href=''>Collections</a></li>
          <li><a href=''>Discounts</a></li>
        </ul>
        <DropdownMenu />
        <button className='home-login-button' onClick={() => navigate('login')}>Log in</button>
        <a href='/checkout'><img onClick={()=> Navigate('checkout')} className='shopping-cart' src='assets/trolley.png' alt='shopping-cart'/></a>
      </div>
    </div>
  )
}*/


