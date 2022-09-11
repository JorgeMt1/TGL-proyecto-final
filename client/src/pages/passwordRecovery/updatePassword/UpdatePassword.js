import React, { useState } from 'react'
import './updatePassword.css'
import Navbar from '../../../components/navbar/NavBar';
import FormContainer from '../../../containers/formContainer/FormContainer';

const axios = require('axios');
const url = "http://localhost:3001/api/v1/auth/change-password";

function UpdatePassword() {
  const [sucess, setSucces] = useState(false);
  const [values, setValues] = useState({
    token: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url, values, config).then(response => {
      setSucces(true)
    });
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSucces(false)
  };

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should bea at least 8 characters!",
      label: "Password",
      pattern: `^[A-Za-z0-9]{8,}$`,
      required: true,
    },
    {
      id: 2,
      name: "Re-enter Password",
      type: "password",
      placeholder: "Re-enter Password",
      errorMessage:
        "Passwords don't match!",
      pattern: values.password,
      required: true,
    }
  ]
  return (
    <>
      <Navbar />
      <div className='updatePassword'>
        <FormContainer
          title='Reset Password'
          inputs={inputs}
          values={values}
          onChange={onChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  )
}

export default UpdatePassword;