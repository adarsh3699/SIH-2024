import React, { useState } from "react";
import "./NabBar.css"; // Assuming you have a CSS file for styling

import Wellcare from "../../imgs/WellCare-removebg-preview.png";
import { NavLink, useNavigate } from "react-router-dom";
import { extractEncryptedToken } from "../../utils";

const userLoggedIn = localStorage.getItem("JWT_token");

const userEmail = extractEncryptedToken(userLoggedIn)?.email;

const NabBar = () => {
	const navigate = useNavigate();
	const [isLogged, setIsLogged] = useState(!!userEmail);

	const handleSignInOut = () => {
		localStorage.removeItem("JWT_token");
		localStorage.removeItem("user_details");
		localStorage.removeItem("login_info");

		if (userEmail) {
			localStorage.removeItem("JWT_token");
			localStorage.removeItem("user_details");
			localStorage.removeItem("login_info");
			navigate("/");
			setIsLogged(false);
		} else {
			navigate("/");
		}
	};
	return (
		<nav>
			<div className="nav-logo">
				<img src={Wellcare} alt="Logo" />
			</div>
			<div className="nav-links">
				<NavLink to="/">Main</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/contact">Contact Us</NavLink>
				<button onClick={handleSignInOut} className="nav_login">
					{isLogged ? "Sign Out" : "Login"}
				</button>
			</div>
		</nav>
	);
};

export default NabBar;
