import React from 'react'
import './EditProduct.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react';

const axios = require('axios');

let url="http://localhost:3001/api/v1/products/";

export default function EditProduct() {
    const navigate = useNavigate();
    const form = useRef(null);
    let { id } = useParams();

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
		axios.patch(url + id, data, config).then(response =>{
			console.log(response);
		});
    }

  return (
    <div className='EditProduct-container'>
          <form onSubmit={handleSubmit} ref={form}>
            <img src='assets/logo.png' alt='logo'/>
            <h1>Edit Product</h1>
            <input name='name' id='name'type='text' placeholder='Name'/>
            <input name='price' id="price" type='number' min='10' placeholder='Price'/>
            <input name='description' id="description" type='text' placeholder='Description'/>
            <input name='image' id="image" type='text'  placeholder='ImageUrl'/>
            <input name='categoryId' id="categoryId" type='number' min='1' placeholder='CategoryId'/>
            <button className='EditProduct-button'>Edit Product</button>
            <button className='EditProduct-return-button' onClick={() => navigate("/ProductDataTable")}>Return</button>
          </form>
    </div>
  )
}
