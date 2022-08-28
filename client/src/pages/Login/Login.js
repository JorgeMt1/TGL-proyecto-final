import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const axios = require('axios');
let url="http://localhost:3001/api/v1/auth/login";

function Login() {
  const navigate = useNavigate();
  const form = useRef(null);

	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
			password: formData.get('password'),

		};
		axios.post(url , data).then(response =>{
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
		});
    navigate('/')
  }

  return (
    <div className='login-container'>
      <img className='login-logo' src='assets/shopping-logo.png' alt='logo' />
      <form action='/' className='login-container-form' ref={form}>
        <label htmlFor="email">User name</label>
        <input name="email" id="email" type='text' placeholder='Email'></input>
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type='password' placeholder='Password'></input>
        <button className='login-button' onClick={handleSubmit}>Login</button>
      </form>
      <button className='signup-button' onClick={() => navigate('/signup')}>Sign Up</button>
      <button onClick={()=> handleSubmit()}>prueba</button>
      <a href=''>Forgot password?</a>
  </div>
  )
}

export default Login;