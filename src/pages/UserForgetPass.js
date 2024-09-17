import React from 'react';
import { NavLink } from 'react-router-dom';
import Niraksh from '../imgs/WellCare-removebg-preview.png'
import '../styles/userForgetPass.css';

const UserForgetPass = () => {
	return (
		<div id="forgot_password">
			<img src={Niraksh} alt="Logo" class="logo" />
			<div class="container">
				<h1>Forgot Password</h1>
				<p>Enter your email address and we'll send you a OTP to reset your password.</p>
				<form id="forgot-password-form">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" required placeholder="Enter your email" />

					<button type="submit">Reset Password</button>
				</form>
				<div class="login-link">
					<NavLink to="/login">Remember your password? Log in</NavLink>
				</div>
			</div>
		</div>
	);
};

export default UserForgetPass;
