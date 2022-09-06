import React from 'react'
import './shoppingProduct.css'

export default function ShoppingProduct(props) {
  return (
    <div className='shopping-product-container'>
        <img src={props.data.image} alt='orderimg' />
        <span>{props.data.name}</span>
        <input type='number' className='products-amount-input' placeholder='amount'/>
        <span>{props.data.price}</span>
        <button onClick={()=> console.log(props)}>Quit</button>
    </div>
  )
}
