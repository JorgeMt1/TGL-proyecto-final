import React from 'react'
import { useState,useRef } from 'react';
import './dropdownmenu.css'

export default function DropdownMenu() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    return (
      <div>
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src=''></img>
          </div>
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <h3>The Kiet<br/><span>Website Designer</span></h3>
            <ul>
              <DropdownItem  text = {"My Profile"}/>
              <DropdownItem text = {"Edit Profile"}/>
              <DropdownItem  text = {"Inbox"}/>
              <DropdownItem  text = {"Settings"}/>
              <DropdownItem  text = {"Helps"}/>
              <DropdownItem  text = {"Logout"}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img></img>
        <a> {props.text} </a>
      </li>
    );
 }


