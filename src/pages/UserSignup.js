import React, { useState } from 'react';

import '../styles/userSignup.css';
import { NavLink } from 'react-router-dom';

const UserSignup = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted:', formData);
	};

	return (
		<div>
			<img src="/placeholder.svg?height=50&width=50" alt="Logo" class="logo" />
			<div class="container">
				<h1>Create an account</h1>
				<form id="signup-form">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" required placeholder="Enter email" />

					<label for="username">Name</label>
					<input type="text" id="username" name="username" required placeholder="Enter name" />

					<label for="password">Set Password</label>
					<input type="password" id="password" name="password" required placeholder="Enter password" />

					<label>Sex</label>
					<div class="gender-group">
						<label>
							<input type="radio" id="male" name="gender" value="male" required />
							Male
						</label>
						<label>
							<input type="radio" id="female" name="gender" value="female" required />
							Female
						</label>
					</div>

					<button type="submit">Continue</button>
				</form>
				<button class="google-btn">
					<img src="/placeholder.svg?height=20&width=20" alt="Google" width="20px" />
					Continue with Google
				</button>
				<div class="login-link">
					<NavLink to="/login">Already have an account? Log in</NavLink>
				</div>
			</div>
		</div>
	);
};

export default UserSignup;
