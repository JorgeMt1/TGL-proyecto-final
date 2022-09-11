import React, { useContext } from 'react'
import './shoppingProduct.css'
import { CartContext } from './../../routes/App'

export default function ShoppingProduct(props) {
  const context = useContext(CartContext)
  const { cart, setCart } = context;

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
  return (
    <div className='shopping-product-container'>
      <img src={props.data.image} alt='orderimg' />
      <span>Name: {props.data.name}</span>
      <span>Price: {props.data.price}</span>
      <button onClick={() => setCart(arrayRemove(cart, props.data))}>Quit</button>
    </div>
  )
}
