import React from 'react'
import './PasswordRecovery.css'
import { useRef} from 'react';
import { useNavigate } from 'react-router-dom'

const axios = require('axios');

const url="http://localhost:3001/api/v1/auth/recovery";

function PasswordRecovery() {
  const navigate = useNavigate();
  const form = useRef(null);
	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
		};
		axios.post(url , data)
    .then(response =>{
      navigate('/send-email');
    })
    .catch (error => {
      if(!error.response.data){
        console.log('No Server Reponse');
      }
      else if(error.response.status === 401 || 400){
        console.log('Wrong user');
      }
    });
  }
  
  return (
    <div className='pswrd-recovery-container'>
      <form onSubmit={handleSubmit} ref={form} className='pswrd-recovery-form'>
        <img className='login-logo' src='assets/logo.png' alt='logo' />
        <h1>Password recovery</h1>
        <span>Please enter the email address used to create this account</span>
        <label>Email address</label>
      <input name='email' type='email' placeholder='Email address' required></input>
        <button className='pswrd-recovery-button'>Send</button>
        <a href='/login'>Go Back</a>
      </form>
  </div>
  )
}

export default PasswordRecovery;