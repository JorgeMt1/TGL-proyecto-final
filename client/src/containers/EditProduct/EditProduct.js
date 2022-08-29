import React from 'react'
import './EditProduct.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const axios = require('axios');

let url="http://localhost:3001/api/v1/products/";

export default function EditProduct() {
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
			price:  formData.get('price'),
			description: formData.get('description'),
            image: formData.get('image'),
            categoryId: formData.get('categoryId'),
		};
        console.log(formData.get('Id'))
		axios.patch(url +  formData.get('Id'), data, config).then(response =>{
			console.log(response);
		});
    }

  return (
    <div className='Createproduct-container'>
      <div>
      <img src='assets/logo.png' alt='logo'/>
        <h1>Create Product</h1>
          <form action='/' ref={form}>
            <input name='Id' id='name'type='text' placeholder='Id'/>
            <input name='name' id='name'type='text' placeholder='Name'/>
            <input name='price' id="price" type='number' min='10' placeholder='Price'/>
            <input name='description' id="description" type='text' placeholder='Description'/>
            <input name='image' id="image" type='text'  placeholder='ImageUrl'/>
            <input name='categoryId' id="categoryId" type='number' min='1' placeholder='CategoryId'/>
            <button className='Createproduct-button' onClick={handleSubmit} >Edit Product</button>
            <button className='Createproduct-return-button' onClick={() => navigate("/ProductDataTable")}>Return</button>
          </form>
      </div>
    </div>
  )
}
