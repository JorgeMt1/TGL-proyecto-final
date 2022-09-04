import React from 'react'
import './createProduct.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const axios = require('axios');

let url="http://localhost:3001/api/v1/products";

export default function CreateProduct() {
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
		axios.post(url , data, config).then(response =>{
			console.log(response);
		});
    }

  return (
    <div className='Create-product-container'>
          <form  className='polo' onSubmit={handleSubmit} ref={form}>
            <img src='assets/logo.png' alt='logo'/>
            <h1>Create Product</h1>
            <input name='name' id='name'type='text' placeholder='Name' required/>
            <input name='price' id="price" type='number' min='10' placeholder='Price' required/>
            <input name='description' id="description" type='text' placeholder='Description' required/>
            <input name='image' id="image" type='text'  placeholder='ImageUrl' required/>
            <input name='categoryId' id="categoryId" type='number' min='1' placeholder='CategoryId' required/>
            <button className='Create-product-button'>Create Product</button>
            <button className='Create-product-return-button' onClick={() => navigate("/ProductDataTable")}>Return</button>
          </form>
    </div>
  )
}
