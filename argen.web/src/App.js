import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';

function App() {
	//const { token, setToken } = useToken();

	//if (!token)
	//	return <Login setToken={setToken} />

	//					<Route path="/dashboard" element={<Dashboard />} />
	//					<Route path="/preferences" element={<Preferences />} />

	return (
		<div className="wrapper">
			<h1>Application</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
