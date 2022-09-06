import React, { useDebugValue } from 'react'
import NavBar from '../../components/navbar/NavBar';
import Product from '../../components/product/Product'
import { useState, useEffect } from 'react';
import './home.css'

const API = 'http://localhost:3001/api/v1/categories/';
const API2 = 'http://localhost:3001/api/v1/products/';
const config= { headers: {Authorization: `Bearer ${localStorage.getItem("token")}`} };
const axios = require('axios');

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() =>{
    axios.get(API, config)
    .then(response=>{
      setCategories(response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  useEffect(() =>{
    axios.get(API2, config)
    .then(response=>{
      setProducts(response.data)
      setResult(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])


  const ResetFilter= ()=>{
    setResult(products);
  }

  const categoryFilter= (catId) => {
    setResult(products.filter((currentData)=>{
      console.log(currentData)
      return currentData.categoryId === catId;
    }));
    console.log(result)
  }

  return (
    <div className='home-container'>
        <NavBar />
        <div className='home-middle-container'>
          <div className='home-left-container'>
            <button onClick={()=>ResetFilter()}>Reset</button>
            {
              categories[0]!= undefined && categories.map( items => <button className='filterButton' onClick={()=>categoryFilter(items.id)} key={items.id}>{items.name}</button>)
            }
          </div>
        <div className='home-right-container'>
          <div className='items'>
            {
              result[0]!= undefined && result.map( items => <Product key={items.id} data={items}/>)
            }
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default Home;