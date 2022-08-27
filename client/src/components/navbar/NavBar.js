import React from 'react'
import './navbar.css'
import { Navigate, useNavigate } from 'react-router-dom'


export default function NavBar() {
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
        <button className='home-login-button' onClick={() => navigate('login')}>Log in</button>
        <a href='/checkout'><img onClick={()=> Navigate('checkout')} className='shopping-cart' src='assets/trolley.png' alt='shopping-cart'/></a>
      </div>
    </div>
  )
}
