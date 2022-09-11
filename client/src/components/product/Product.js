import React, { useContext } from 'react'
import './product.css'
import { CartContext } from './../../routes/App'

function Product(props) {
  const context = useContext(CartContext)
  const { cart, setCart } = context;

  const handleclick = () => {
    if (cart.find(x => x.id === props.data.id)) return;
    setCart([...cart, item])
  }

  const item = {
    id: props.data.id,
    image: props.data.image,
    name: props.data.name,
    price: props.data.price,
    amount: 1
  }
  return (
    <div className='item-container'>
      <img className='item-image' src={props.data.image} alt='item-img'></img>
      <hr className='hr' />
      <p className='item-data'>
        <span className='item-description'>{props.data.description}</span>
        <span>{props.data.price}</span>
      </p>
      <button className='add-to-cart-button' onClick={() => handleclick()}>Add to cart</button>
    </div>
  )
}

export default Product;