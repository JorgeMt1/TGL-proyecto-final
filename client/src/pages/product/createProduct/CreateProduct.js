import React from 'react'
import './createProduct.css'
import { useState } from 'react';
import Navbar from '../../../components/navbar/NavBar';
import FormContainer from '../../../containers/formContainer/FormContainer';
import { createInputs } from '../ProductsInputs'

const axios = require('axios');
const url = "http://localhost:3001/api/v1/products";

export default function CreateProduct() {
  const [sucess, setSucces] = useState(false);
  const [values, setValues] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    categoryId: ""
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
      <div className='create-product-container'>
          <FormContainer 
            title='Create Product'          
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
