import React from 'react'
import './myorders.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/NavBar';

import Datatable from 'react-data-table-component';

const axios = require('axios');

const API = 'http://localhost:3001/api/v1/profile/my-orders';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };

export default function MyOrders() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const columns =[
    {
      name: "Id",
      selector: row => row.id
    },
    {
      name: "Total",
      selector: row => row.total
    },
    {
      name: "Date",
      selector: row => row.createdAt.substring(0, 10)
    },
    {
      name: "Action",
      cell:(row) => 
        <button className='Edit-Data-Button' onClick={()=>navigate('/my-orders/' + row.id)}>Read</button>,
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

  return (
    <div className= 'ProductDataTable'>
      <Navbar />
      <div className='ProductDataTable-Container'>
      <div className='ProductDataTable-Head'>
        <div className='ProductDataTable-Head-leftside'>
          <h1>My Orders Datatable</h1>
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
      </div>
  )
}