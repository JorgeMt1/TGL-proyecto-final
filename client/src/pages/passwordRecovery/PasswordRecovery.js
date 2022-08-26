import React from 'react'
import './PasswordRecovery.css'

function PasswordRecovery() {
  return (
    <div className='login-container'>
      <img className='login-logo' src='assets/shopping-logo.png' alt='logo' />
      <span>Password recovery</span>
      <span>Please enter the email addres used to create this account</span>
      <form className='login-container-form' action='/'>
        <label>Email address</label>
        <input type='text' placeholder='Email address'></input>
      </form>
      <button>Send</button>
      <a href=''>Go Back</a>
  </div>
  )
}

export default PasswordRecovery;