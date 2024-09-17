import React from "react";

const EmergencyForm = () => {
	return (
		<div>
			<h1>Emergency Form</h1>
			<form>
				<div>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" />
				</div>
				<div>
					<label htmlFor="phone">Phone:</label>
					<input type="tel" id="phone" name="phone" />
				</div>
				<div>
					<label htmlFor="emergency">Emergency Details:</label>
					<textarea id="emergency" name="emergency"></textarea>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default EmergencyForm;
