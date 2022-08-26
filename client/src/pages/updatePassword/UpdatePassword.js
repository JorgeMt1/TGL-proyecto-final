import React from 'react'
import './updatePassword.css'

function UpdatePassword() {
  return (
    <div className='login-container'>
      <img className='login-logo' src='assets/shopping-logo.png' alt='logo' />
      <span>Create a new password</span>
      <span>Please enter a new password</span>
      <form className='login-container-form' action='/'>
        <label>Password</label>
        <input type='text' placeholder='Email address'></input>
        <label>Re-enter Password</label>
        <input type='text' placeholder='Email address'></input>
      </form>
      <button>Send</button>
  </div>
  )
}

export default UpdatePassword;