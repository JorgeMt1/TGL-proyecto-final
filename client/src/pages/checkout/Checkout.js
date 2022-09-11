import  React,{ useContext, useState } from 'react'
import ShoppingProduct from '../../components/shoppingProduct/ShoppingProduct';
import { CartContext } from './../../routes/App'
import Navbar from '../../components/navbar/NavBar';
import './checkout.css'

const axios = require('axios');
const config ={
  headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
}
const url="http://localhost:3001/api/v1/orders";

function Checkout() {
  const context = useContext(CartContext)
  const { cart, setCart } = context;
  let objetos = []

  const createOder = () => {
    axios.post(url, "", config)
      .then(response => {
        cart.map(elements => objetos.push({
          orderId: response.data.id,
          productId: elements.id,
          amount: 1
        }))
      })

    objetos.map( element => axios.post(url + "/add-item", element, config)
      .then(response => {
        console.log(response);
    }).catch(error => console.log(error)));
  }

  return (
    <div className='checkout'>
      <Navbar />
      <div className='checkout-container'>
        <div className='checkout-products'>
          {
            cart.length ? cart.map( items => <ShoppingProduct key={items.id} data={items}/>) : <h1>Empty</h1>
          }
        </div>
        <div className='checkout-products-bottom'>
          <span className='total-amount'>Total amount: {cart.reduce((a,v) => a = a + v.price,0 )}</span>
          <button className='checkout-btn-buy' onClick={()=> createOder()}>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;