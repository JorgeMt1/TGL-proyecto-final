import React from 'react'
import './createUser.css'
import { useState } from 'react';
import Navbar from '../../../components/navbar/NavBar';
import FormContainer from '../../../containers/formContainer/FormContainer';
import { createInputs } from '../UsersInputs'

const axios = require('axios');

const url = "http://localhost:3001/api/v1/users";

export default function Createuser() {
  const [sucess, setSucces] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "",
  });
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }

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

  return (
    <>
      <Navbar />
      <div className='create-user-container'>
          <FormContainer 
            title='Create User'          
            inputs={createInputs} 
            values={values} 
            onChange={onChange} 
            handleSubmit={handleSubmit}
            successfully={sucess}
          />
      </div>
    </>
  )
}
