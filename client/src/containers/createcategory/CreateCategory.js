import React from 'react'
import './createCategory.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const axios = require('axios');

let url="http://localhost:3001/api/v1/categories";

export default function CreateCategories() {
  const navigate = useNavigate();
  const form = useRef(null);

  const config ={
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
  }

    const handleSubmit = (event)=>{
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        name: formData.get('name'),
        image:  formData.get('image'),
      };
      axios.post(url , data, config).then(response =>{
        console.log(response);
      });
    }

  return (
    <div className='Createcategory-container'>
      <div>
      <img src='assets/logo.png' alt='logo'/>
        <h1>Create Category</h1>
          <form action='/' ref={form}>
            <input name='name' id='name' type='text' placeholder='Name'/>
            <input name='image' id='image' type='text'  placeholder='ImageUrl'/>
            <button className='Createcategory-button' onClick={handleSubmit}>Create Category</button>
            <button className='Createcategory-return-button' onClick={() => navigate(-1)}>Return</button>
          </form>
      </div>
    </div>
  )
}
