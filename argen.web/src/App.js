import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo/Logo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Dashboard from './components/Dashboard/Dashboard';
//import Preferences from './components/Preferences/Preferences';
import Main from './components/Main/Main';
import Footer from './components/UI/Footer';

import ReactGA from 'react-ga';
function App() {

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
