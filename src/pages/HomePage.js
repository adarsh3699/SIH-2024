import React, { useState, useEffect } from 'react';
import '../styles/homePage.css';

const texts = ["Book your Doctor's appointment", 'Get expert medical care today'];
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function App() {
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [displayText, setDisplayText] = useState('');

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
		<>
			<nav>
				<div className="logo">
					<img src="/placeholder.svg?height=50&width=50" alt="Logo" />
					<span>मित्र</span>
				</div>
				<div className="nav-links">
					<a href="#">Main</a>
					<a href="#">About</a>
					<a href="#">Contact Us</a>
					<a href="#">Help</a>
				</div>
			</nav>
			<div className="container">
				<div className="main-content">
					<div className="text-content">
						<h1>Book Your Doctor's Appointment Online</h1>
						<p id="typing-text">{displayText}</p>
						<p>Quick, easy, and convenient. Schedule your next visit with just a few clicks.</p>
						<div className="buttons">
							<button className="btn btn-hospital">HOSPITAL</button>
							<button className="btn btn-user">USER</button>
						</div>
					</div>
					<div className="image-content">
						<img src="/placeholder.svg?height=400&width=600" alt="Medical professionals" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
