import React from 'react'
import NavBar from '../../components/navbar/NavBar';
import Product from '../../components/product/Product'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const API = 'http://localhost:3001/api/v1/products/';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };

const axios = require('axios');

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    axios.get(API, config)
    .then(response=>{
      setProducts(response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <div className='home-container'>
        <NavBar />
        <hr />
        <div className='home-middle-container'>
        <div className='items'>
        {
          products[0]!= undefined && products.map( items => <Product key={items.id} data={items}/>)
        }</div>
        </div>
    </div>
  )
}

export default Home;