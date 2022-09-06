import React from 'react'
import './editcategory.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react';

const axios = require('axios');

let url="http://localhost:3001/api/v1/categories/";

export default function Editcategory() {
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
            image: formData.get('image'),
		};
		axios.patch(url + id, data, config).then(response =>{
			console.log(response);
		});
    }
  return (
    <div className='EditProduct-container'>
          <form onSubmit={handleSubmit} ref={form}>
          <img src='assets/logo.png' alt='logo' />
            <h1>Edit Product</h1>
            <input name='name' id='name'type='text' placeholder='Name'/>
            <input name='image' id="image" type='text'  placeholder='ImageUrl'/>
            <button className='EditProduct-button'>Edit Product</button>
            <button className='EditProduct-return-button' onClick={() => navigate("/ProductDataTable")}>Return</button>
          </form>
    </div>
  )
}
