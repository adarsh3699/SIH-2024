import React from 'react';

import '../styles/hospitalLogin.css';
import { NavLink } from 'react-router-dom';

const HospitalLogin = () => {
	return (
		<div id="HospitalLogin">
			<div className="hospitalLogin_container">
				<h1>Hospital Login</h1>
				<form id="login-form">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						required
						placeholder="Enter your username or email"
					/>

					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" required placeholder="Enter your password" />

					<button type="submit">Login</button>
				</form>
				<div className="links">
					<NavLink to="#">Forgot password?</NavLink>
					<NavLink to="/hospital-registration">New Hospital? Register here</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HospitalLogin;
