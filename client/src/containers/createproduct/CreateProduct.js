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
    <div className='Createproduct-container'>
      <div>
      <img src='assets/logo.png' alt='logo'/>
        <h1>Create Product</h1>
          <form action='/' ref={form}>
            <input name='name' id='name'type='text' placeholder='Name'/>
            <input name='price' id="price" type='number' min='10' placeholder='Price'/>
            <input name='description' id="description" type='text' placeholder='Description'/>
            <input name='image' id="image" type='text'  placeholder='ImageUrl'/>
            <input name='categoryId' id="categoryId" type='number' min='1' placeholder='CategoryId'/>
            <button className='Createproduct-button' onClick={handleSubmit} >Create Product</button>
            <button className='Createproduct-return-button' onClick={() => navigate("/ProductDataTable")}>Return</button>
          </form>
      </div>
    </div>
  )
}
