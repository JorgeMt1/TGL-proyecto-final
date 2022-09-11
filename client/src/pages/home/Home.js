import React from 'react'
import NavBar from '../../components/navbar/NavBar';
import Product from '../../components/product/Product'
import { useState, useEffect } from 'react';
import './home.css'
import Filter from '../../containers/filter/Filter';

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

  const setFilter= (catId) => {
    setResult(products.filter((currentData)=>{
      return currentData.categoryId === catId;
    }));
  }

  return (
    <div className='home'>
      <NavBar />
      <div className='home-middle-container'>
        {
          categories.length !=0 && <Filter data={categories} setFilter={setFilter} ResetFilter={ResetFilter}/>
        }
        <div className='home-right-container'>
          <div className='items'>
            {
              result.length != 0 && result.map(items => <Product key={items.id} data={items}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;