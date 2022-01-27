import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import PillList from '../UI/PillsList';

import APData from '../../data/AP.json';	//this is read only in DEV mode

export default function Main() {

	const url = process.env.REACT_APP_ENDPOINT_PILLS;
	const [answerAPI, SetAPIAnswer] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const queryAPI = async () => {
			setLoading(true);

			const consulta = (
				process.env.NODE_ENV === "development" ? await axios({ url }) : APData);

			SetAPIAnswer(consulta);

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