import React from 'react'
import './navbar.css'

export default function NavBar() {
  return (
    <div className='navbar'>
        <span>Logo</span>
        <ul>
            <li><a href=''>New</a></li>
            <li><a href=''>Collections</a></li>
            <li><a href=''>Discounts</a></li>
        </ul>
    </div>
  )
}
