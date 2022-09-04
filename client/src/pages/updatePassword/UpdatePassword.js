import React from 'react'
import './updatePassword.css'
import { useNavigate } from 'react-router-dom'

function UpdatePassword() {
  const navigate = useNavigate();
  return (
    <div className='updatePassword'>
      <form className='login-container-form' action='/'>
        <img className='login-logo' src='assets/padlock.png' alt='logo' />
        <span>Please enter a new password</span>
        <label>Password</label>
        <input type='text' placeholder='Password'></input>
        <label>Re-enter Password</label>
        <input type='text' placeholder='Re-enter Password'></input>
        <button>Send</button>
        <button onClick={() => navigate('/login')} >Return to sign in</button>
      </form>
  </div>
  )
}

export default UpdatePassword;