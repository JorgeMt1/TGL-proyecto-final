import React from 'react'
import './emailSent.css'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../../../components/navbar/NavBar';

function EmailSent() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
        <div className='email-sent'>
          <div className='email-sent-container'>
            <img className='email-sent-img' src='assets/letter.png' alt='logo' />
            <h2>Email sent!</h2>
            <span>Please check out your inbox for instructions</span>
            <button onClick={() => navigate('/login')}>Return to sign in</button>
            <span>Haven't recived it? <Link to ="/forgotpassword">Resend</Link></span>
          </div>
        </div>
    </>
  )
}

export default EmailSent;