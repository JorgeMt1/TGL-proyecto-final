import React from 'react'
import "./createCustomer.css"
import { useState } from 'react';
import FormContainer from '../../../containers/formContainer/FormContainer';
import Navbar from '../../../components/navbar/NavBar';
import { inputs } from '../CustomerInputs'

const axios = require('axios');

const url = "http://localhost:3001/api/v1/customers";

export default function CreateCustomer() {
  const [sucess, setSucces] = useState(false);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    phone: "",
    user: {
      email: "",
      password: "",
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url, values).then(response => {
      setSucces(true)
    })
  }

  const onChange = (e) => {
    if (e.target.name == "email" || e.target.name == "password") {
      setValues({ ...values, user: { ...values.user, [e.target.name]: e.target.value } });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    setSucces(false)
  };

  return (
    <>
      <Navbar />
      <div className='create-customer'>
          <FormContainer 
            title='Create account'          
            inputs={inputs} 
            values={values} 
            onChange={onChange} 
            handleSubmit={handleSubmit}
            successfully={sucess}
          />
      </div>
    </>
  )
}
