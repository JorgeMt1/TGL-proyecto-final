import React from 'react'
import Navbar from '../../../components/navbar/NavBar';
import { useRef, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './forgotPassword.css'

const axios = require('axios');

const url="http://localhost:3001/api/v1/auth/recovery";

function ForgotPassword() {
  const navigate = useNavigate();
  const form = useRef(null);

  const [focused, setFocused] = useState(false);

	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
		};
		axios.post(url , data)
    .then(response =>{
      navigate('/email-sent');
    })
    .catch (error => {
      if(!error.response.data){
        console.log('No Server Reponse');
      }
      else if(error.response.status === 401 || 400){
        console.log('Wrong user');
        setFocused(true)
      }
    });
  }

  return (
    <>
      <Navbar/>
      <div className='forgot-password'>
        <div className='forgot-password-container'>
          <img className='login-logo' src='assets/logo.png' alt='logo' />
          <span>Please enter the email address used to create this account</span>
          <form onSubmit={handleSubmit} ref={form}>
            { focused ? <span className='not-found'>User not found</span>: null}
            <label>Email address</label>
            <input name='email' type='email' placeholder='Email address' focused={focused.toString()}></input>
            <button className='forgot-password-button'>Send</button>
          </form>
          <Link to="/login">Go Back</Link>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;