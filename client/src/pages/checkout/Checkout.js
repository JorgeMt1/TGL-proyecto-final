import React from 'react'
import ShoppingProduct from '../../components/shoppingProduct/ShoppingProduct';
import './checkout.css'
import { Navigate, useNavigate } from 'react-router-dom'

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className='checkout-container'>
      <div className='checkout-products'>
        <ShoppingProduct />
        <ShoppingProduct />
        <ShoppingProduct />
        <ShoppingProduct />
      </div>
      <div className='totalAmount'>
            <span>Total products:</span>
            <span>Total amount:</span>
        </div>
        <div className='checkout-buttons'>
          <button>Checkout</button>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    </div>
  )
}

export default Checkout;