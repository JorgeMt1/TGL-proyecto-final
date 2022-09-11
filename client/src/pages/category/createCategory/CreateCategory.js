import React from 'react'
import './createCategory.css'
import { useState } from 'react';
import Navbar from '../../../components/navbar/NavBar';
import FormContainer from '../../../containers/formContainer/FormContainer';
import { createInputs } from '../CategoriesInputs'

const axios = require('axios');

const url = "http://localhost:3001/api/v1/categories";

export default function CreateCategories() {
  const [sucess, setSucces] = useState(false);
  const [values, setValues] = useState({
    name: "",
    image: "",
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
      <div className='create-category'>
          <FormContainer 
            title='Create Category'
            buttonText='Create Category'
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
