import React from 'react'
import ShoppingProduct from '../../components/shoppingProduct/ShoppingProduct';
import './checkout.css'

function Checkout() {
  return (
    <div className='checkout-container'>
        <ShoppingProduct />
        <ShoppingProduct />
        <ShoppingProduct />
        <ShoppingProduct />
        <div className='totalAmount'>
            <span>Total</span>
            <span>Total amount</span>
        </div>
        <button>Checkout</button>
    </div>
  )
}

export default Checkout;