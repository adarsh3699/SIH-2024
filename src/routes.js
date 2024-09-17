import React, { Suspense, lazy } from 'react';
import { Navigate, Routes as Switch, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';

// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ForgetPasswordPage = lazy(() => import('./pages/ForgetPasswordPage'));
// const CreateAcc = lazy(() => import('./pages/CreateAcc'));
const HomePage = lazy(() => import('./pages/HomePage'));
const HospitalRegPage = lazy(() => import('./pages/HospitalRegPage'));
const HospitalDashboard = lazy(() => import('./pages/HospitalDashboard'));
const HospitalSearch = lazy(() => import('./pages/HospitalSearch'));
const PatientPortal = lazy(() => import('./pages/PatientPortal'));
const UserLogin = lazy(() => import('./pages/UserLogin'));
const UserSignup = lazy(() => import('./pages/UserSignup'));

function Routes() {
	return (
		<Suspense
			fallback={
				<div id="loadingScreen">
					Loading
					<Loader isLoading={true} sx={{ marginTop: '10px' }} />
				</div>
			}
		>
			<Switch>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/home" element={<Navigate to="/" />} />
				<Route exact path="/hospital-registration" element={<HospitalRegPage />} />
				<Route exact path="/hospital-dashboard" element={<HospitalDashboard />} />
				<Route exact path="/hospital-search" element={<HospitalSearch />} />
				<Route exact path="/patient-portal" element={<PatientPortal />} />
				<Route exact path="/login" element={<UserLogin />} />
				<Route exact path="/register" element={<UserSignup />} />

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
