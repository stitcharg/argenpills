import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import PillList from '../UI/PillsList';

import APData from '../../data/AP.json';	//this is read only in PROD mode
export default function Main() {

	const [answerAPI, SetAPIAnswer] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const queryAPI = async () => {
			const url = process.env.REACT_APP_ENDPOINT_PILLS;

			setLoading(true);

			const query = (
				process.env.NODE_ENV === "development" ? await axios({ url }) : APData);

			SetAPIAnswer(query);

			setLoading(false);
		};

		queryAPI();
	}, []);

	if (loading === true) {
		return <div>Cargando...</div>;
	}

	return (
		<Container className="p-3">
			<PillList data={answerAPI.data} />
		</Container>
	);
}