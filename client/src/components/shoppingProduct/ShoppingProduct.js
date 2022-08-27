import React from 'react'
import './shoppingProduct.css'

export default function ShoppingProduct() {
  return (
    <div className='shopping-product-container'>
        <img src='assets/gears.png' alt='orderimg' />
        <span>T-shirt</span>
        <span>$30.00</span>
        <button>Quit</button>
    </div>
  )
}
