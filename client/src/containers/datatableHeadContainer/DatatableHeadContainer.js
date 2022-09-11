import React from 'react'
import { useNavigate } from 'react-router-dom'
import './datatableHeadContainer.css'

export default function DatatableHeadContainer(props) {
  const navigate = useNavigate();
  return (
    <div className='datatable-head'>
      <div className='datatable-head-leftside'>
        <h1>{props.title}</h1>
        <button onClick={() => navigate(props.navigate)}>{props.text}</button>
      </div>
      <div className='datatable-head-rightside'>
        <img src='assets/logo.png' alt='logo' />
      </div>
    </div>
  )
}
