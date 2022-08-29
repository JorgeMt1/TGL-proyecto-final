import React from 'react'
import "./createaccount.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'

const axios = require('axios');

let url="http://localhost:3001/api/v1/customers";

function CreateAccount() {
	const navigate = useNavigate();
	const form = useRef(null);

	const handleSubmit = (event)=>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			phone: formData.get('phoneNumber'),
			lastName: formData.get('lastName'),
			user: {
				email: formData.get('email'),
				password: formData.get('password'),
			}
		};
		axios.post(url , data).then(response =>{
			console.log(response);
		});
	}

  return (
    <div className="CreateAccount">
			<div className="CreateAccount-container">
			<img className='login-logo' src='assets/logo.png' alt='logo' />
				<h2 className="title">Create account</h2>
				<form action="/" className="form" ref={form}>
					<div>
						<label htmlFor="name" className="label">Name</label>
						<input type="text" name= "name" id="name" placeholder="Name" className="input input-name" />
						<label htmlFor="lastname" className="label">Last Name</label>
						<input type="text" name="lastName" id="Lastname" placeholder="Last Name" className="input input-name" />
						<label htmlFor="phoneNumber" className="label">Phone Number</label>
						<input type="text" name="phoneNumber" id="PhoneNumer" placeholder="Phone Number" className="input input-name" />
						<label htmlFor="email" className="label">Email</label>
						<input type="text" name="email" id="email" placeholder="email@example.com" className="input input-email" />
						<label htmlFor="password" className="label">Password</label>
						<input type="password" name="password" id="password" placeholder="*********" className="input input-password" />
					</div>
						<button onClick={handleSubmit} className="create-account-button">El color es naranja</button>
				</form>
			</div>
			<button onClick={() => navigate(-1)}>Return</button>
		</div>
  )
}

export default CreateAccount;