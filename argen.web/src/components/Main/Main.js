import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import PillList from '../UI/PillsList';

export default function Main() {

	const url = 'http://localhost:8080/pills';
	const [answerAPI, SetAPIAnswer] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const queryAPI = async () => {
			setLoading(true);
			const consulta = await axios({ url });

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