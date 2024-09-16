import React, { useState, useEffect } from 'react';
import '../styles/hospitalRegPage.css'; // Add your styling here

const HospitalRegPage = () => {
	const [states] = useState([
		'Andhra Pradesh',
		'Arunachal Pradesh',
		'Assam',
		'Bihar',
		'Chhattisgarh',
		'Goa',
		'Gujarat',
		'Haryana',
		'Himachal Pradesh',
		'Jharkhand',
		'Karnataka',
		'Kerala',
		'Madhya Pradesh',
		'Maharashtra',
		'Manipur',
		'Meghalaya',
		'Mizoram',
		'Nagaland',
		'Odisha',
		'Punjab',
		'Rajasthan',
		'Sikkim',
		'Tamil Nadu',
		'Telangana',
		'Tripura',
		'Uttar Pradesh',
		'Uttarakhand',
		'West Bengal',
	]);
	const [departments] = useState([
		'Cardiology',
		'Neurology',
		'Oncology',
		'Pediatrics',
		'Orthopedics',
		'Gynecology',
		'Dermatology',
		'Ophthalmology',
		'Psychiatry',
		'Urology',
		'Gastroenterology',
		'Endocrinology',
		'Nephrology',
		'Pulmonology',
	]);
	const [facilities] = useState([
		'ICU',
		'Emergency Room',
		'Operation Theater',
		'Laboratory',
		'Radiology',
		'Pharmacy',
		'Blood Bank',
		'Ambulance Service',
		'Cafeteria',
		'Parking',
	]);

	const [selectedState, setSelectedState] = useState('');
	const [districts, setDistricts] = useState([]);
	const [selectedDepartments, setSelectedDepartments] = useState([]);
	const [selectedFacilities, setSelectedFacilities] = useState([]);
	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	// Handle district population based on selected state
	useEffect(() => {
		if (selectedState) {
			// Mock districts for the selected state
			setDistricts(['District 1', 'District 2', 'District 3']);
		} else {
			setDistricts([]);
		}
	}, [selectedState]);

	const handleCheckboxChange = (event, setter, list) => {
		const value = event.target.value;
		if (event.target.checked) {
			setter([...list, value]);
		} else {
			setter(list.filter((item) => item !== value));
		}
	};

	const handleUsernameChange = (e) => {
		if (e.target.value.trim() === '') {
			setUsernameError('Username is required');
		} else {
			setUsernameError('');
		}
	};

	const handlePasswordChange = (e) => {
		const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
		if (!regex.test(e.target.value)) {
			setPasswordError(
				'Password must be at least 8 characters long and contain at least one letter, one number, and one special character'
			);
		} else {
			setPasswordError('');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted');

		// Access form data
		const formData = new FormData(e.target);
		for (let [key, value] of formData.entries()) {
			console.log(key, value);
		}

		console.log('Selected Departments:', selectedDepartments);
		console.log('Selected Facilities:', selectedFacilities);
	};

	return (
		<div className="container">
			<div className="header">
				<img src="https://via.placeholder.com/50" alt="Logo" />
				<h1>Hospital Registration Dashboard</h1>
			</div>
			<p>Register your hospital by providing the following details</p>
			<form id="hospitalForm" onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="hospitalName">Hospital Name</label>
						<input type="text" id="hospitalName" name="hospitalName" required />
					</div>
					<div className="form-group">
						<label htmlFor="hospitalType">Hospital Type</label>
						<select id="hospitalType" name="hospitalType" required>
							<option value="">Select type</option>
							<option value="Government">Government</option>
							<option value="Private">Private</option>
							<option value="Clinics">Clinics</option>
						</select>
					</div>
				</div>

				{/* Other form fields */}

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="state">State</label>
						<select id="state" name="state" required onChange={(e) => setSelectedState(e.target.value)}>
							<option value="">Select state</option>
							{states.map((state) => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="district">District</label>
						<select id="district" name="district" required disabled={!selectedState}>
							<option value="">Select district</option>
							{districts.map((district) => (
								<option key={district} value={district}>
									{district}
								</option>
							))}
						</select>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group">
						<label for="address">Address</label>
						<input type="text" id="address" name="address" required />
					</div>
					<div class="form-group">
						<label for="hospitalWebsite">Hospital Website</label>
						<input type="url" id="hospitalWebsite" name="hospitalWebsite" />
					</div>
				</div>

				<div class="form-row">
					<div class="form-group">
						<label for="averageOPD">Average OPD Registration per Day</label>
						<input type="number" id="averageOPD" name="averageOPD" required />
					</div>
					<div class="form-group">
						<label for="numberOfBeds">Number of Beds</label>
						<input type="number" id="numberOfBeds" name="numberOfBeds" required />
					</div>
				</div>

				<div class="form-group">
					<label for="numberOfDoctors">Number of Doctors</label>
					<input type="number" id="numberOfDoctors" name="numberOfDoctors" required />
				</div>
				<br />
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="departments">Departments Available</label>

						<div className="dropdown-check-list" tabIndex="100">
							<span className="anchor">Select Departments</span>
							<ul className="items">
								{departments.map((dept) => (
									<li key={dept}>
										<input
											type="checkbox"
											value={dept}
											onChange={(e) =>
												handleCheckboxChange(e, setSelectedDepartments, selectedDepartments)
											}
										/>
										{dept}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="facilities">Facilities Available</label>
						<div className="dropdown-check-list" tabIndex="100">
							<span className="anchor">Select Facilities</span>
							<ul className="items">
								{facilities.map((facility) => (
									<li key={facility}>
										<input
											type="checkbox"
											value={facility}
											onChange={(e) =>
												handleCheckboxChange(e, setSelectedFacilities, selectedFacilities)
											}
										/>
										{facility}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" name="username" required onChange={handleUsernameChange} />
						{usernameError && <div className="error">{usernameError}</div>}
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" required onChange={handlePasswordChange} />
						{passwordError && <div className="error">{passwordError}</div>}
					</div>
				</div>
				<button type="submit">Register Hospital</button>
			</form>
		</div>
	);
};

export default HospitalRegPage;
