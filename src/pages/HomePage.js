import React, { useState, useEffect } from "react";

import "../styles/homePage.css";

import professional from "../imgs/doctor-nurses-special-equipment.png";
import hospitalLogo from "../imgs/hospitalLogo.svg";
import userLogo from "../imgs/userLogo.svg";

import { NavLink } from "react-router-dom";
import { extractEncryptedToken } from "../utils";

const texts = ["Book your Doctor's appointment", "Get expert medical care today"];
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

const userLoggedIn = localStorage?.getItem("JWT_token");
const userType = extractEncryptedToken(userLoggedIn)?.type;

function HomePage() {
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		const currentText = texts[textIndex];

		let typingTimeout;
		if (isDeleting) {
			typingTimeout = setTimeout(() => {
				setDisplayText(currentText.substring(0, charIndex - 1));
				setCharIndex(charIndex - 1);
			}, deletingSpeed);
		} else {
			typingTimeout = setTimeout(() => {
				setDisplayText(currentText.substring(0, charIndex + 1));
				setCharIndex(charIndex + 1);
			}, typingSpeed);
		}

		if (!isDeleting && charIndex === currentText.length) {
			setTimeout(() => setIsDeleting(true), pauseTime);
		} else if (isDeleting && charIndex === 0) {
			setIsDeleting(false);
			setTextIndex((textIndex + 1) % texts.length);
		}

		return () => clearTimeout(typingTimeout);
	}, [charIndex, isDeleting, textIndex]);

	return (
		<div id="homePage">
			<div className="main-content">
				<div className="text-content">
					<h1>
						Every <span className="emergency-call">emergency call</span> is a call for hope and help
					</h1>
					<p id="typing-text">{displayText}</p>
					<p>Quick, easy, and convenient.</p>
					<div className="buttons">
						<NavLink
							className="btn btn-hospital"
							to={userType === "hospital" ? "/hospital-dashboard" : "/hospital-login"}
						>
							HOSPITAL
							<img src={hospitalLogo} alt="" />
						</NavLink>
						<NavLink className="btn btn-user" to={userType === "user" ? "/user-dashboard" : "/login"}>
							USER
							<img src={userLogo} alt="" />
						</NavLink>
					</div>
				</div>
				<div className="image-content">
					<img src={professional} alt="Medical professionals" />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
