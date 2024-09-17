import React from "react";
import "../styles/userEmergencyForm.css";

const UserEmergencyForm = () => {
	return (
		<div id="UserEmergencyForm">
			<div className="container">
				<img
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiMyYzdhN2IiLz48cGF0aCBkPSJNMjUgMTBDMTYuNzE2IDEwIDEwIDE2LjcxNiAxMCAyNUMxMCAzMy4yODQgMTYuNzE2IDQwIDI1IDQwQzMzLjI4NCA0MCA0MCAzMy4yODQgNDAgMjVDNDAgMTYuNzE2IDMzLjI4NCAxMCAyNSAxMFpNMjIgMzBWMjBIMjhWMzBIMjJaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=="
					alt="Logo"
					className="logo"
				/>
				<h1>Emergency</h1>
				<h2>Patient Form</h2>
				<p>Please fill out the form below to provide information about the emergency patient.</p>
				<form id="emergencyForm">
					<div className="form-content">
						<div className="form-fields">
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" id="name" placeholder="Optional" />
							</div>
							<div className="form-group">
								<label htmlFor="age">Age</label>
								<input type="number" id="age" placeholder="Optional" />
							</div>
							<div className="form-group">
								<label htmlFor="gender">Gender</label>
								<input type="text" id="gender" placeholder="M/F" />
							</div>
							<div className="form-group">
								<label htmlFor="location">Location</label>
								<div className="location-input">
									<svg
										className="location-icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									<input
										type="text"
										id="location"
										placeholder="Click to get current location"
										readOnly
									/>
								</div>
							</div>
						</div>
						<div className="image-upload" id="imageUpload">
							<img
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMTVIMzBDMzIuNzYxNCAxNSAzNSAxNy4yMzg2IDM1IDIwVjMwQzM1IDMyLjc2MTQgMzIuNzYxNCAzNSAzMCAzNUgyMEMxNy4yMzg2IDM1IDE1IDMyLjc2MTQgMTUgMzBWMjBDMTUgMTcuMjM4NiAxNy4yMzg2IDE1IDIwIDE1Wk0yNSAzMEMyNy43NjE0IDMwIDMwIDI3Ljc2MTQgMzAgMjVDMzAgMjIuMjM4NiAyNy43NjE0IDIwIDI1IDIwQzIyLjIzODYgMjAgMjAgMjIuMjM4NiAyMCAyNUMyMCAyNy43NjE0IDIyLjIzODYgMzAgMjUgMzBaIiBmaWxsPSIjMmM3YTdiIi8+PC9zdmc+"
								alt="Camera Icon"
								id="cameraIcon"
							/>
							<img
								id="capturedImage"
								alt=""
								style={{ display: "none", maxWidth: "100%", maxHeight: "100%" }}
							/>
						</div>
					</div>
					<button type="submit" className="start-btn">
						START
					</button>
				</form>
			</div>
		</div>
	);
};

export default UserEmergencyForm;
