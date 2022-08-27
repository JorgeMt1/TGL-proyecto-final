import React from 'react'
import NavBar from '../../components/navbar/NavBar';
import Product from '../../components/product/Product'
import Filters from '../../containers/filter/Filters';
import './home.css'

function Home() {
  return (
    <div className='home-container'>
        <NavBar />
        <hr />
        <div className='home-middle-container'>
            <div className='items'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home;