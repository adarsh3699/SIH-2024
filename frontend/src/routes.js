import React, { Suspense, lazy } from "react";
import { Navigate, Routes as Switch, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import NabBar from "./components/nabBar/NabBar";

const HomePage = lazy(() => import("./pages/HomePage"));
const HospitalLogin = lazy(() => import("./pages/HospitalLogin"));
const HospitalRegPage = lazy(() => import("./pages/HospitalRegPage"));
const HospitalDashboard = lazy(() => import("./pages/HospitalDashboard"));
const HospitalSearch = lazy(() => import("./pages/HospitalSearch"));
const PatientPortal = lazy(() => import("./pages/PatientPortal"));
const UserLogin = lazy(() => import("./pages/UserLogin"));
const UserSignup = lazy(() => import("./pages/UserSignup"));
const UserForgetPass = lazy(() => import("./pages/UserForgetPass"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const UserEmergencyForm = lazy(() => import("./pages/UserEmergencyForm"));
const OPDappointment = lazy(() => import("./pages/OPDappointment"));

function Routes() {
	return (
		<Suspense
			fallback={
				<div id="loadingScreen">
					Loading
					<Loader isLoading={true} sx={{ marginTop: "10px" }} />
				</div>
			}
		>
			<Switch>
				<Route
					exact
					path="/"
					element={
						<>
							<NabBar />
							<HomePage />
						</>
					}
				/>
				<Route exact path="/home" element={<Navigate to="/" />} />
				<Route
					exact
					path="/hospital-login"
					element={
						<>
							<NabBar />
							<HospitalLogin />
						</>
					}
				/>
				<Route
					exact
					path="/hospital-registration"
					element={
						<>
							<NabBar />
							<HospitalRegPage />
						</>
					}
				/>
				<Route
					exact
					path="/hospital-dashboard"
					element={
						<>
							<NabBar />
							<HospitalDashboard />
						</>
					}
				/>
				<Route
					exact
					path="/hospital-search"
					element={
						<>
							<NabBar />
							<HospitalSearch />
						</>
					}
				/>
				<Route
					exact
					path="/user-dashboard"
					element={
						<>
							<NabBar />
							<PatientPortal />
						</>
					}
				/>
				<Route
					exact
					path="/opd-appointment"
					element={
						<>
							<NabBar />
							<OPDappointment />
						</>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<>
							<NabBar />
							<UserLogin />
						</>
					}
				/>
				<Route
					exact
					path="/register"
					element={
						<>
							<NabBar />
							<UserSignup />
						</>
					}
				/>
				<Route
					exact
					path="/forgot-password"
					element={
						<>
							<NabBar />
							<UserForgetPass />
						</>
					}
				/>

				<Route
					exact
					path="/about"
					element={
						<>
							<NabBar />
							<AboutUs />
						</>
					}
				/>
				<Route
					exact
					path="/contact"
					element={
						<>
							<NabBar />
							<ContactUs />
						</>
					}
				/>

				<Route
					exact
					path="/emergency-form"
					element={
						<>
							<NabBar />
							<UserEmergencyForm />
						</>
					}
				/>

				<Route
					path="*"
					element={
						<center id="pageNotFound">
							<h1>Sorry, this page isn't available.</h1>
							<h2>Error: 404</h2>
							<a href="/login"> Go to Login Page</a>
						</center>
					}
				/>
			</Switch>
		</Suspense>
	);
}

export default Routes;
