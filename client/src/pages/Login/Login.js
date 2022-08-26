import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login-container'>
      <img className='login-logo' src='assets/shopping-logo.png' alt='logo' />
      <form className='login-container-form' action='/'>
        <label>User name</label>
        <input type='text' placeholder='Username'></input>
        <label>Password</label>
        <input type='password' placeholder='Password'></input>
      </form>
      <button>Login</button>
      <button>Sign Up</button>
      <a href=''>Forgot password?</a>
  </div>
  )
}

export default Login;