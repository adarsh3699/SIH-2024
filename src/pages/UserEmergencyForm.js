import React from "react";
import "../styles/userEmergencyForm.css";

const UserEmergencyForm = () => {
	return (
		<div id="userEmergencyForm">
			<div className="header">
				<svg className="logo" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="50" height="50" fill="#2c7a7b" />
					<path
						d="M25 10C16.716 10 10 16.716 10 25C10 33.284 16.716 40 25 40C33.284 40 40 33.284 40 25C40 16.716 33.284 10 25 10ZM22 30V20H28V30H22Z"
						fill="white"
					/>
				</svg>
				<div>
					<h1>Emergency</h1>
					<h2>Patient Form</h2>
				</div>
			</div>
			<p className="description">
				Please fill out the form below to provide information about the emergency patient.
			</p>
			<form id="emergencyForm">
				<div className="form-content">
					<div className="form-fields">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input id="name" placeholder="Optional" />
						</div>
						<div className="form-group">
							<label htmlFor="age">Age</label>
							<input id="age" type="number" placeholder="Optional" />
						</div>
						<div className="form-group">
							<label htmlFor="gender">Gender</label>
							<input id="gender" placeholder="M/F" />
						</div>
						<div className="form-group">
							<label htmlFor="location">Location</label>
							<div className="location-input">
								<svg
									className="location-icon"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<input id="location" placeholder="Click to get current location" readOnly />
							</div>
						</div>
					</div>
					<div className="image-upload" id="imageUpload">
						<div>Please click a picture of the incident</div>
						<div className="image-area">
							<svg
								className="camera-icon"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<img id="capturedImage" alt="Captured incident" style={{ display: "none" }} />
						</div>
					</div>
				</div>
				<button type="submit" className="start-btn">
					START
				</button>
			</form>
		</div>
	);
};

export default UserEmergencyForm;
