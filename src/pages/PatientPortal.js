import React from 'react';
import '../styles/patientPortal.css';

const PatientPortal = () => {
	return (
		<div className="card">
			<h1>Patient Portal</h1>
			<p>Choose an option to proceed with your appointment</p>
			<div className="button-container">
				<button className="button button-primary" onClick="navigateTo('/hospital-list')">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M19 10V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4"></path>
						<path d="M1 10v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8"></path>
						<path d="M12 16v-6"></path>
						<path d="M8 16v-4"></path>
						<path d="M16 16v-4"></path>
					</svg>
					View Hospital List
				</button>
				<button className="button button-secondary" onClick="navigateTo('/patient-form')">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<rect x="3" y="3" width="18" height="18" rx="2"></rect>
						<path d="M12 8v8"></path>
						<path d="M8 12h8"></path>
					</svg>
					Fill Patient Form
				</button>
			</div>
		</div>
	);
};

export default PatientPortal;
