import React from 'react'
import './login.css'
import NavBar from '../../components/navbar/NavBar';
import { useNavigate, Link } from 'react-router-dom'
import { useRef, useState } from 'react';
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton';

const axios = require('axios');

const url = "http://localhost:3001/api/v1/auth/login";

function Login() {
  const navigate = useNavigate();
  const form = useRef(null);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    axios.post(url, data)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role)
        setShow(false);
        navigate('/');
      })
      .catch(error => {
        if (error.response.status === 401 || 400) {
          setShow(true);
        }
      });
  }

  return (
    <>
      <NavBar />
      <div className='login'>
        <div className='login-form-container'>
          <img className='login-logo' src='assets/logo.png' alt='logo' />
          <form onSubmit={handleSubmit} ref={form}>
            {
              show ? <span className='wrong-user' >The email or password you entered is incorrect.</span> : null
            }
            <label htmlFor="email">Email</label>
            <input name='email' type='text' className='login-email' placeholder='Email' required />
            <label htmlFor="password">password</label>
            <input name='password' type='Password' className='login-password' placeholder='Password' required />
            <PrimaryButton text='Login' />
          </form>
          <SecondaryButton onClick={() => navigate('/signup')} text='Sign Up' />
          <Link to="/forgotpassword">Forgot password?</Link>
        </div>
      </div>
    </>
  )
}

export default Login;