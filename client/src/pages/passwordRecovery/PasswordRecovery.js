import React from 'react'
import './PasswordRecovery.css'

function PasswordRecovery() {
  return (
    <div className='pswrd-recovery-container'>
      <img className='login-logo' src='assets/shopping-logo.png' alt='logo' />
      <h1>Password recovery</h1>
      <span>Please enter the email address used to create this account</span>
      <form className='pswrd-recovery-form' action='/'>
        <label>Email address</label>
        <input type='text' placeholder='Email address'></input>
      </form>
      <button className='pswrd-recovery-button'>Send</button>
      <a href=''>Go Back</a>
  </div>
  )
}

export default PasswordRecovery;