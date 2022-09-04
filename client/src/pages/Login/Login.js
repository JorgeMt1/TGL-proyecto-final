import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';

const axios = require('axios');

const url="http://localhost:3001/api/v1/auth/login";

function Login() {
  const navigate = useNavigate();
  const form = useRef(null);
  const [show, setShow] = useState(false);
  
	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
		};
		axios.post(url , data)
    .then(response =>{
      localStorage.setItem("token", response.data.token);
      setShow(false);
      navigate('/');
    })
    .catch (error => {
      if(!error.response.data){
        console.log('No Server Reponse');
      }
      else if(error.response.status === 401 || 400){
        console.log('Wrong user');
        setShow(true);
      }
    });
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} ref={form}>
        <img className='login-logo' src='assets/logo.png' alt='logo' />
        {
         show?<span className='wrong-user' >The email or password you entered is incorrect.</span>:null
        }
        <label htmlFor="email">Email</label>
        <input name='email' type='text' className='login-email' placeholder='Email' required/>
        <label htmlFor="password">password</label>
        <input name='password' type='Password' className='login-password' placeholder='Password' required />
        <button className='login-button'>Login</button>
        <button className='signup-button' onClick={() => navigate('/signup')}>Sign Up</button>
        <a href='forgotpassword'>Forgot password?</a>
      </form>
  </div>
  )
}

export default Login;