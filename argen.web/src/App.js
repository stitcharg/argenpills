import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo/Logo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Dashboard from './components/Dashboard/Dashboard';
//import Preferences from './components/Preferences/Preferences';
import Main from './components/Main/Main';
//import Login from './components/Login/Login';
//import useToken from './components/App/useToken';
import Footer from './components/UI/Footer';

import ReactGA from 'react-ga';
function App() {
	//const { token, setToken } = useToken();

	//if (!token)
	//	return <Login setToken={setToken} />

	//					<Route path="/dashboard" element={<Dashboard />} />
	//					<Route path="/preferences" element={<Preferences />} />

	ReactGA.initialize('UA-221362845-1');
	ReactGA.pageview(window.location.pathname + window.location.search);

	return (
		<div className="wrapper">
			<Logo />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</BrowserRouter>

			<Footer />

		</div>
	);
}

export default App;
