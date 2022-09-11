import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/NavBar';
import './editCategory.css'
import FormContainer from '../../../containers/formContainer/FormContainer';
import { editInputs } from '../CategoriesInputs'

const axios = require('axios');

const url = "http://localhost:3001/api/v1/categories/";

export default function Editcategory() {
  let { id } = useParams();
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
      <div className='edit-category'>
        <FormContainer 
          title='Create Category'
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
