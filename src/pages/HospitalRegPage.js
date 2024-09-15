import React from 'react';
import '../styles/hospitalRegPage.css';

const HospitalRegPage = () => {
	return (
		<div class="container">
			<div class="header">
				<img src="https://via.placeholder.com/50" alt="Logo" />
				<h1>Hospital Registration Dashboard</h1>
			</div>
			<p>Register your hospital by providing the following details</p>
			<form id="hospitalForm">
				<div class="form-row">
					<div class="form-group">
						<label for="hospitalName">Hospital Name</label>
						<input type="text" id="hospitalName" name="hospitalName" required />
					</div>
					<div class="form-group">
						<label for="hospitalType">Hospital Type</label>
						<select id="hospitalType" name="hospitalType" required>
							<option value="">Select type</option>
							<option value="Government">Government</option>
							<option value="Private">Private</option>
							<option value="Clinics">Clinics</option>
						</select>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group">
						<label for="googleMapsLink">Google Maps Link</label>
						<input type="url" id="googleMapsLink" name="googleMapsLink" required />
					</div>
					<div class="form-group">
						<label for="phone">Phone</label>
						<input type="tel" id="phone" name="phone" required />
					</div>
				</div>
				<div class="form-row">
					<div class="form-group">
						<label for="state">State</label>
						<select id="state" name="state" required>
							<option value="">Select state</option>
							{/* <!-- Indian states will be populated by JavaScript --> */}
						</select>
					</div>
					<div class="form-group">
						<label for="district">District</label>
						<select id="district" name="district" required disabled>
							<option value="">Select district</option>
							{/* <!-- Districts will be populated based on selected state --> */}
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
				<div class="form-row">
					<div class="form-group">
						<label for="numberOfDoctors">Number of Doctors</label>
						<input type="number" id="numberOfDoctors" name="numberOfDoctors" required />
					</div>
					<div class="form-group">
						<label for="departments">Departments Available</label>
						<div id="departments-list" class="dropdown-check-list" tabindex="100">
							<span class="anchor">Select Departments</span>
							<ul class="items">{/* <!-- Departments will be populated by JavaScript --> */}</ul>
						</div>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group">
						<label for="facilities">Facilities Available</label>
						<div id="facilities-list" class="dropdown-check-list" tabindex="100">
							<span class="anchor">Select Facilities</span>
							<ul class="items">{/* <!-- Facilities will be populated by JavaScript --> */}</ul>
						</div>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>
				</div>
				<div class="form-row">
					<div class="form-group">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" required />
						<div id="usernameError" class="error"></div>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" id="password" name="password" required />
						<div id="passwordError" class="error"></div>
					</div>
				</div>
				<button type="submit">Register Hospital</button>
			</form>
		</div>
	);
};

export default HospitalRegPage;
