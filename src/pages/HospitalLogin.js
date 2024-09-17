import React from 'react';

import '../styles/hospitalLogin.css';

const HospitalLogin = () => {
	return (
		<div id="HospitalLogin">
			<img src="/placeholder.svg?height=60&width=60" alt="Hospital Logo" class="logo" />
			<div class="container">
				<h1>Hospital Login</h1>
				<form id="login-form">
					<label for="username">Username or Email</label>
					<input
						type="text"
						id="username"
						name="username"
						required
						placeholder="Enter your username or email"
					/>

					<label for="password">Password</label>
					<input type="password" id="password" name="password" required placeholder="Enter your password" />

					<label for="role">Role</label>
					<select id="role" name="role" class="role-select" required>
						<option value="">Select your role</option>
						<option value="doctor">Doctor</option>
						<option value="nurse">Nurse</option>
						<option value="admin">Administrator</option>
						<option value="patient">Patient</option>
					</select>

					<button type="submit">Login</button>
				</form>
				<div class="links">
					<a href="#">Forgot password?</a>
					<a href="#">New patient? Register here</a>
				</div>
			</div>
		</div>
	);
};

export default HospitalLogin;
