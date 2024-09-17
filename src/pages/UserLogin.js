import React from 'react';

import '../styles/userLogin.css';

const UserLogin = () => {
	return (
		<div id="UserLogin">
			<img src="/placeholder.svg?height=50&width=50" alt="Logo" class="logo" />
			<div class="container">
				<h1>Login</h1>
				<form id="login-form">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" required placeholder="Enter your email" />

					<label for="password">Password</label>
					<input type="password" id="password" name="password" required placeholder="Enter your password" />

					<button type="submit">Login</button>
				</form>
				<button class="google-btn">
					<img src="/placeholder.svg?height=20&width=20" alt="Google" width="20px" />
					Continue with Google
				</button>
				<div class="links">
					<a href="#">Forgot password?</a>
					<a href="#">Don't have an account? Sign up</a>
				</div>
			</div>
		</div>
	);
};

export default UserLogin;
