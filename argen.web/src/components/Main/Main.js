import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import PillList from '../UI/PillsList';

export default function Main() {

	const [answerAPI, SetAPIAnswer] = useState({});
	const [loading, setLoading] = useState(false);
	const { search } = window.location;

	useEffect(() => {
		const queryAPI = async () => {
			setLoading(true);

			var searchText = new URLSearchParams(search).get('s');
			if (searchText === null) {
				const url = process.env.REACT_APP_ENDPOINT_PILLS;
				const query = await axios({ url });
				SetAPIAnswer(query);
			}
			else {
				const url = process.env.REACT_APP_ENDPOINT_PILLS_SEARCH + "?s=" + searchText;
				const query = await axios({ url });

				SetAPIAnswer(query);
			}



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