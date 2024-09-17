import React from 'react';
import './NabBar.css'; // Assuming you have a CSS file for styling

import Wellcare from '../../imgs/WellCare-removebg-preview.png';
import { NavLink } from 'react-router-dom';

const NabBar = () => {
	return (
		<nav>
			<div className="nav-logo">
				<img src={Wellcare} alt="Logo" />
			</div>
			<div className="nav-links">
				<NavLink to="/">Main</NavLink>
				<NavLink to="/">About</NavLink>
				<NavLink to="/">Contact Us</NavLink>
				<NavLink to="/" className="nav_login">
					Login
				</NavLink>
			</div>
		</nav>
	);
};

export default NabBar;
