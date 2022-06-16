import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from './components/UI/Footer';

import ReactGA from 'react-ga';
import Header from './components/Header/Header';
function App() {

	if (process.env.NODE_ENV === 'production') {
		ReactGA.initialize('UA-221362845-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	return (
		<div className="wrapper">
			<Header />

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
