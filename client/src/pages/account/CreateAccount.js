import React from 'react'
import "./createaccount.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FormInput from "./../../components/forminput/FormInput";

const axios = require('axios');

let url="http://localhost:3001/api/v1/customers";

function CreateAccount() {
	const navigate = useNavigate();

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
		  name: "lastName",
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
		  name: "phone",
		  type: "tel",
		  placeholder: "Phone Number",
		  errorMessage:
			"Phone Number should be a valid Phone Number!",
		  label: "Phone Number",
		  pattern: "^[0-9]{3}-[0-9]{3}-[0-9]{4}",
		  required: true,
		},
		{
			id:4,
			email: "",
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
			"Password should bea at least 5 characters!",
		  label: "Password",
		  pattern: `^[A-Za-z0-9]{5,}$`,
		  required: true,
		},
	  ];

	const handleSubmit = (event)=>{
		event.preventDefault();
		axios.post(url , values).then(response =>{
			console.log(response);
		}).catch (error => {
			console.log(error.response.status);
			if(!error.response.data){
			  console.log('No Server Reponse');
			}
		})
	}

	const [values, setValues] = useState({
		name: "",
		lastName: "",
		phone: "",
		user:{
			email: "",
			password: "",
		}
	  });

	const onChange = (e) => {
		if(e.target.name=="email") {
			setValues({ ...values, user:{ ...values.user, [e.target.name]: e.target.value} });
		}else if(e.target.name=="password"){
			setValues({ ...values, user:{ ...values.user, [e.target.name]: e.target.value} });
		}
		else{
			setValues({ ...values, [e.target.name]: e.target.value });
		}
	  };

  return (
	<div className="CreateAccount-container">
		<form className="form" onSubmit={handleSubmit}>
			<img className='login-logo' src='assets/logo.png' alt='logo' />
			{inputs.map((input) => (
         	 <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          	/>
        	))}
			<button className="create-account-button">Create</button>
			<button className="create-account-return" onClick={() => navigate(-1)}>Return</button>
		</form>
	</div>
  )
}

export default CreateAccount;