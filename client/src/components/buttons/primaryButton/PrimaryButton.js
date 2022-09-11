import React from 'react'
import './primaryButton.css'

export default function PrimaryButton(props) {
  return (
    <>
      <button className='primary-buton' {...props}>{props.text}</button>
    </>
  )
}
