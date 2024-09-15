import React, { Suspense, lazy } from 'react';
import { Navigate, Routes as Switch, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';

// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ForgetPasswordPage = lazy(() => import('./pages/ForgetPasswordPage'));
// const CreateAcc = lazy(() => import('./pages/CreateAcc'));
const HomePage = lazy(() => import('./pages/HomePage'));
const HospitalRegPage = lazy(() => import('./pages/HospitalRegPage'));
const HospitalDashboard = lazy(() => import('./pages/HospitalDashboard'));
// const SettingsPage = lazy(() => import('./pages/SettingsPage'));

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
				{/*<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/register" element={<CreateAcc />} />
				<Route exact path="/forget-password" element={<ForgetPasswordPage />} /> */}
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/hospital-registration" element={<HospitalRegPage />} />
				<Route exact path="/hospital-dashboard" element={<HospitalDashboard />} />
				{/* <Route path="/share/*" element={<HomePage />} /> */}
				{/* <Route exact path="/settings" element={<SettingsPage />} /> */}
				<Route exact path="/home" element={<Navigate to="/" />} />

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
