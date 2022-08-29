import React from 'react'
import './ProductDataTable.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Datatable from 'react-data-table-component';

const axios = require('axios');

const API = 'http://localhost:3001/api/v1/products/';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };

export default function ProductDataTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
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
        <button className='Edit-Data-Button' onClick={()=> navigate('/EditProduct')}>Edit</button>,
        <button className='Remove-Data-Button' id={row.id} onClick={()=> DeleteRow(row)}>Remove</button>
      </div>
    }
  ]
  useEffect(() =>{
    axios.get(API, config)
    .then(response=>{
      setProducts(response.data)})
    .catch(error => {
      console.log(error);
    });
  }, [])
  console.log(products)

  function DeleteRow(row){
    axios.delete(API+ row.id, config);
    
  }
  return (
    <div className= 'ProductDataTable-Container'>
      <div className='ProductDataTable-Head'>
        <div className='ProductDataTable-Head-leftside'>
          <h1>Products Datatable</h1>
          <button onClick={() => navigate('/create-product')}>Create Product</button>
        </div>
        <div className='ProductDataTable-Head-rightside'>
          <img className='Datatable-logo' src='assets/logo.png' alt='logo'/>
        </div>
      </div>
      <div className= 'crud-container'>
        <Datatable
        columns={columns}
        data={products}
        pagination/>
      </div>
      <button className='ProductDataTable-Return-Button' onClick={() => navigate('/')}>Return</button>
    </div>
  )
}