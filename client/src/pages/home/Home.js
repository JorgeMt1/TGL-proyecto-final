import React from 'react'
import NavBar from '../../components/navbar/NavBar';
import Product from '../../components/product/Product'
import Filters from '../../containers/filter/Filters';
import './home.css'

function Home() {
  return (
    <div className='home-container'>
        <NavBar />
        <div className='home-middle-container'>
            <Filters />
            <div className='items'>
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