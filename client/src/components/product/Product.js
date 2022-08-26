import React from 'react'
import './product.css'

function Product() {
  return (
    <div className='item-container'>
        <img className='item-image' src='assets/model1.jpg' alt='item-img'></img>
        <p className='item-data'>
            <span className='item-description'>Pice of clothes to cover top-side</span>
            <span className='item-price'>$30.0</span>
        </p>
    </div>
  )
}

export default Product;