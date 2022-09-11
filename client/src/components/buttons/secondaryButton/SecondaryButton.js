import React from 'react'
import './secondaryButton.css'

export default function SecondaryButton(props) {
	return (
		<>
			<button className='secondary-buton' {...props}>{props.text}</button>
		</>
	)
}
