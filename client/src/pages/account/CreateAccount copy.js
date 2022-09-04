import React from 'react'
import "./createaccount.css"
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FormInput from "./../../components/forminput/FormInput";

const axios = require('axios');

let url="http://localhost:3001/api/v1/customers";

function CreateAccount() {
	const navigate = useNavigate();
	const form = useRef(null);

	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
	});

	const inputs = [
	  {
	    id: 1,
		name: "name",
		type: "text",
		placeholder: "Name",
		errorMessage:
		  "Name should be 3-16 characters and shouldn't include any special character!",
		label: "Name",
		pattern: "^[A-Za-z0-9]{3,16}$",
		required: true,
	  },
	  {
	    id: 2,
		name: "lastname",
		type: "text",
		placeholder: "Lastname",
		errorMessage:
		  "Lastname should be 3-16 characters and shouldn't include any special character!",
		label: "Lastname",
		pattern: "^[A-Za-z0-9]{3,16}$",
		required: true,
	  },
	  {
		id: 3,
		name: "phonenumber",
		type: "tel",
		placeholder: "Phone Number",
		errorMessage:
		  "Phone Number should be a valid Phone Number!",
		label: "Phone Number",
		pattern: "^[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}",
		required: true,
	  },
	  {
		id: 4,
		name: "email",
		type: "email",
		placeholder: "Email",
		errorMessage: "It should be a valid email address!",
		label: "Email",
		required: true,
	  },
	  {
		id: 5,
		name: "password",
		type: "password",
		placeholder: "Password",
		errorMessage:
		  "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
		label: "Password",
		pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
		required: true,
	  },
	];

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
		<form action="/" className="form" ref={form}>
			<img className='login-logo' src='assets/logo.png' alt='logo' />
			<h2 className="title">Create account</h2>
			<h1>Register</h1>
        	{inputs.map((input) => (
          	<FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
          	/>
        	))}
			<button onClick={handleSubmit} className="create-account-button">El color es naranja</button>
		</form>
		</div>
		<button onClick={() => navigate(-1)}>Return</button>
		</div>
  )
}

export default CreateAccount;