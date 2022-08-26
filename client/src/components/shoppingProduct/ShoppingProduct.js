import React from 'react'
import './shoppingProduct.css'

export default function ShoppingProduct() {
  return (
    <div className='shopping-product-container'>
        <img src='assets/gears.png' alt='orderimg' />
        <span>Product name</span>
        <span>Price</span>
        <button>X</button>
    </div>
  )
}
