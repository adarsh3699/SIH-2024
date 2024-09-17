import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/userLogin.css';

const UserLogin = () => {
	return (
		<div id="UserLogin">
			<img src="/placeholder.svg?height=50&width=50" alt="Logo" className="logo" />
			<div className="container">
				<h1>Login</h1>
				<form id="login-form">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" required placeholder="Enter your email" />

					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" required placeholder="Enter your password" />

					<button type="submit">Login</button>
				</form>
				<button className="google-btn">
					<img src="/placeholder.svg?height=20&width=20" alt="Google" width="20px" />
					Continue with Google
				</button>
				<div className="links">
					<NavLink to="/forgot-password">Forgot password?</NavLink>
					<NavLink to="/register">Don't have an account? Sign up</NavLink>
				</div>
			</div>
		</div>
	);
};

export default UserLogin;
