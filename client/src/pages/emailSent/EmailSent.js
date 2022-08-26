import React from 'react'
import './EmailSent.css'

function EmailSent() {
  return (
    <div className='login-container'>
      <img className='login-logo' src='assets/letter.png' alt='logo' />
      <span>Email sent!</span>
      <span>Please check out your inbox for instructions</span>
      <button>Login</button>
      <span>Haven't recived it?<a href=''>Resend</a></span>
  </div>
  )
}

export default EmailSent;