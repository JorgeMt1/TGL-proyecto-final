import React from 'react'
import './product.css'

function Product() {
  return (
    <div className='item-container'>
        <img className='item-image' src='assets/model1.jpg' alt='item-img'></img>
        <hr className='hr' />
        <p className='item-data'>
            <span className='item-description'>Pice of clothes to cover top-side</span>
            <span className='item-price'>$30.0</span>
        </p>
        <button className='add-to-cart-button'>Add to cart</button>
    </div>
  )
}

export default Product;