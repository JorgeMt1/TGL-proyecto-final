import  React,{ useContext } from 'react'
import ShoppingProduct from '../../components/shoppingProduct/ShoppingProduct';
import './checkout.css'
import { Navigate, useNavigate } from 'react-router-dom'
import {CartContext} from './../../routes/App'
import Navbar from '../../components/navbar/NavBar';

const axios = require('axios');
const config ={
  headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
}
const url="http://localhost:3001/api/v1/orders";

function Checkout() {
  const navigate = useNavigate();
  const context = useContext(CartContext)
  const { cart, setCart} = context;
  let orderId=0;
  let data={
    odrId: orderId,


  };

 /* const createOder= ()=>{
  //let data = cart.map( item => {item.id});
  //if(!cart[0]) return;
  console.log(cart[0])
  axios.post(url,"" ,config)
  .then(response =>{
    orderId= response.data.id;
    console.log(orderId);
  })
  .catch (error => {
    if(!error.response.data){
      console.log('No Server Reponse');
    }
    else if(error.response.status === 401 || 400){
      console.log('Wrong user');
    }
  });

  /*axios.post(url +"/add-item",orderId ,config)
  .then(response =>{
    console.log(response);
  });
}*/

  return (
    <div className='checkout'>
      <Navbar />
      <div className='checkout-container'>
        <div className='checkout-products'>
          {
            cart.map( items => <ShoppingProduct key={items.id} data={items}/>)
          }
        </div>
        <div className='totalAmount'>
          <span>Total products:</span>
          <span>Total amount:</span>
        </div>
        <div className='checkout-buttons'>
          <button className='checkout-btn-buy' onClick={()=> createOder()}>Buy</button>
          <button className='checkout-btn-retun'onClick={() => console.log(cart)}>Return</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;