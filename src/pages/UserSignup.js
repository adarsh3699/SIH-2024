import React, { useCallback, useState } from 'react';

import '../styles/userSignup.css';
import { NavLink } from 'react-router-dom';
import { apiCall } from '../utils';
import ShowMsg from '../components/showMsg/ShowMsg';

const UserSignup = () => {
	const [msg, setMsg] = useState({ text: '', type: '' });
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleMsgShown = useCallback((msgText, type) => {
		if (msgText) {
			setMsg({ text: msgText, type: type });
			setTimeout(() => {
				setMsg({ text: '', type: '' });
			}, 2500);
		} else {
			console.log('Please Provide Text Msg');
		}
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			console.log(formData);

			const apiResp = await apiCall('user/signup', 'post', formData);

			if (apiResp.statusCode === 200) {
				// const extractedToken = extractEncryptedToken(apiResp.jwt);
				// const userDetails = {
				// 	...apiResp.details,
				// 	email: extractedToken?.email,
				// };

				// localStorage.setItem('user_details', JSON.stringify(userDetails));
				// localStorage.setItem('JWT_token', apiResp.jwt);
				// localStorage.setItem('login_info', apiResp.loginInfo);
				document.location.href = '/login';
			} else {
				handleMsgShown(apiResp.msg, 'error');
			}
		},
		[formData, handleMsgShown]
	);

	return (
		<div id="userSignup">
			<div className="container">
				<h1>Create an account</h1>
				<form id="signup-form" onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={handleChange}
						required
						placeholder="Enter email"
					/>

					<label htmlFor="username">Name</label>
					<input
						type="text"
						id="username"
						name="username"
						onChange={handleChange}
						required
						placeholder="Enter name"
					/>

					<label htmlFor="password">Set Password</label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={handleChange}
						required
						placeholder="Enter password"
					/>

					<label>Sex</label>
					<div className="gender-group">
						<label>
							<input type="radio" id="male" name="gender" onChange={handleChange} value="male" required />
							Male
						</label>
						<label>
							<input
								type="radio"
								id="female"
								name="gender"
								onChange={handleChange}
								value="female"
								required
							/>
							Female
						</label>
					</div>

					<button type="submit">Continue</button>
				</form>
				<button className="google-btn">
					<img src="/placeholder.svg?height=20&width=20" alt="Google" width="20px" />
					Continue with Google
				</button>
				<div className="login-link">
					<NavLink to="/login">Already have an account? Log in</NavLink>
				</div>
			</div>
			{msg && <ShowMsg msgText={msg?.text} type={msg?.type} />}
		</div>
	);
};

export default UserSignup;
