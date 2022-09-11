import React from 'react'
import './filter.css'

export default function Filter(props) {
  return (
    <div className='filter-container'>
      <button className='filter-reset-button' onClick={() => props.ResetFilter()}>Reset</button>
      {
        props.data.map(item => <button className='filter-button'
        onClick={() => props.setFilter(item.id)} key={item.id}>{item.name}</button>)
      }
    </div>
  )
}
