import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormContainer from '../../../containers/formContainer/FormContainer';
import Navbar from '../../../components/navbar/NavBar';
import './editProduct.css'
import { editInputs } from '../ProductsInputs'

const axios = require('axios');

const url = "http://localhost:3001/api/v1/products/";

export default function EditProduct() {
  const { id } = useParams();
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
    axios.patch(url + id, values, config).then(response => {
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
      <div className='edit-product'>
        <FormContainer 
          title='Edit Product'
          buttonText='Edit Product'
          inputs={editInputs}
          values={values}
          onChange={onChange}
          handleSubmit={handleSubmit}
          successfully={sucess}
        />
      </div>
    </>
  )
}
