import React from 'react'
import './notFound.css'

import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
  <div className='not-found'>
    <h1 className="title-404">404</h1>
    <p className="text-404">Oops! Pagina no encontrada.</p>
    <Link className='button-404' to='/' >Regrese a la página inicial, es mejor.</Link>
  </div>
  )
}


