import React from 'react'
import './EmailSent.css'

function EmailSent() {
  return (
    <div className='email-sent-container'>
      <img className='email-sent-img' src='assets/letter.png' alt='logo' />
      <h2>Email sent!</h2>
      <span>Please check out your inbox for instructions</span>
      <button>Login</button>
      <span>Haven't recived it? <a href=''>Resend</a></span>
  </div>
  )
}

export default EmailSent;