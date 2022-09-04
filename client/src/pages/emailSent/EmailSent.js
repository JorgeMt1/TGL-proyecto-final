import React from 'react'
import './EmailSent.css'
import { useNavigate } from 'react-router-dom'

function EmailSent() {
  const navigate = useNavigate();
  return (
    <div className='email-sent'>
      <div className='email-sent-container'>
        <img className='email-sent-img' src='assets/letter.png' alt='logo' />
        <h2>Email sent!</h2>
        <span>Please check out your inbox for instructions</span>
        <button onClick={() => navigate('/login')}>Return to sign in</button>
        <span>Haven't recived it? <a href='/recovery'>Resend</a></span>
      </div>
  </div>
  )
}

export default EmailSent;