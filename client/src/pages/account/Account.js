import React from 'react'
import "./account.css"

function Account() {
  return (
    <div className="CreateAccount">
			<div className="CreateAccount-container">
			<img className='login-logo' src='assets/shopping-logo.png' alt='logo' />
				<h2 className="title">Create account</h2>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Username</label>
						<input type="text" id="name" placeholder="Username" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="jorge@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="create-account-button" />
				</form>
			</div>
		</div>
  )
}

export default Account;