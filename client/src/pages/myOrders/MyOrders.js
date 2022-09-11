import React from 'react'
import './myOrders.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/NavBar';
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton';

import Datatable from 'react-data-table-component';

const axios = require('axios');

const url = 'http://localhost:3001/api/v1/profile/my-orders';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };

export default function MyOrders() {
  const navigate = useNavigate();
  const [myOrders, setMyOrders] = useState([]);
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
      <PrimaryButton text='Read' onClick={() => navigate('/my-orders/' + row.id)} />
    }
  ]
  useEffect(() =>{
    axios.get(url, config)
    .then(response=>{
      setMyOrders(response.data)})
    .catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <div>
      <Navbar />
      <div className='my-orders-datatable-container'>
        <div className='my-orders-datatable-head'>
          <div className='my-orders-datatable-head-leftside'>
            <h1>My Oders Datatable</h1>
          </div>
          <div className='my-orders-datatable-head-rightside'>
            <img src='assets/logo.png' alt='logo'/>
          </div>
        </div>
        <div className= 'my-orders-datatable'>
          <Datatable
          columns={columns}
          data={myOrders}
          pagination/>
        </div>
        <button className='my-orders-dataTable-return-button' onClick={() => navigate('/')}>Return</button>
      </div>
    </div>
  )
}