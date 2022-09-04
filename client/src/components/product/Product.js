import React from 'react'
import './product.css'
import { useState, useEffect } from 'react';


function Product(props) {
  console.log(props.data)
  return (
    <div className='item-container'>
        <img className='item-image' src={props.data.image} alt='item-img'></img>
        <hr className='hr' />
        <p className='item-data'>
          <span className='item-description'>{props.data.description}</span>
          <span>{props.data.price}</span>
        </p>
        <button className='add-to-cart-button'>Add to cart</button> 
    </div>
  )
}

export default Product;