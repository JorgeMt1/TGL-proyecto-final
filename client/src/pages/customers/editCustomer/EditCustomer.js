import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormContainer from '../../../containers/formContainer/FormContainer';
import Navbar from '../../../components/navbar/NavBar';
import './editCustomer.css'
import { editInputs } from '../CustomerInputs'

const axios = require('axios');

const url = "http://localhost:3001/api/v1/customers/";

export default function EditCustomer() {
  let { id } = useParams();
  const [sucess, setSucces] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(url + id, values, config).then(response => {
      setSucces(true)
    });
  }

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }

  const [values, setValues] = useState({
    name: "",
    lastName:"",
    phone:"",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSucces(false)
  };

  return (
    <>
      <Navbar />
      <div className='edit-customer'>
        <FormContainer 
          title='Edit Customer'
          buttonText='Edit Customer'
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
