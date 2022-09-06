import React from 'react'
import './categorydatatable.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/NavBar';

import Datatable from 'react-data-table-component';

const axios = require('axios');

const API = 'http://localhost:3001/api/v1/categories/';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };

export default function CategoryDataTable() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [categories, setCategories] = useState([]);
  const columns =[
    {
      name: "Id",
      selector: row => row.id
    },
    {
      name: "Name",
      selector: row => row.name
    },
    {
      name: "Description",
      selector: row => row.description
    },  
    {
      name: "Price",
      selector: row => row.price
    },
    {
      name: "Action",
      cell:(row) => 
      <div>
        <button className='Edit-Data-Button' onClick={()=>navigate('/Editcategory/' + row.id)}>Edit</button>,
        <button className='Remove-Data-Button' id={row.id} onClick={()=> DeleteRow(row)}>Remove</button>
      </div>
    }
  ]
  useEffect(() =>{
    axios.get(API, config)
    .then(response=>{
      setCategories(response.data)})
    .catch(error => {
      console.log(error);
    });
  }, [])

  function DeleteRow(row){
    axios.delete(API+ row.id, config);
    
  }
  return (
    <div className= 'ProductDataTable'>
        <Navbar />
        <div className='ProductDataTable-Container'>
      <div className='ProductDataTable-Head'>
        <div className='ProductDataTable-Head-leftside'>
          <h1>Categories Datatable</h1>
          <button className='CategoryDataTable-Create-Button' onClick={() => navigate('/create-category')}>Create Category</button>
        </div>
        <div className='ProductDataTable-Head-rightside'>
          <img className='Datatable-logo' src='assets/logo.png' alt='logo'/>
        </div>
      </div>
      <div className= 'crud-container'>
        <Datatable
        columns={columns}
        data={categories}
        pagination/>
      </div>
      <button className='ProductDataTable-Return-Button' onClick={() => navigate(-1)}>Return</button>
    </div>
    </div>
  )
}