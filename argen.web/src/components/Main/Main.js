import React from 'react';

import { Container } from 'react-bootstrap';

import Data from '../../data/AP.json';
import PillList from '../UI/PillsList';

export default function Main() {

	console.log(Data);
	return (
		<Container className="p-3">
			<h2 className="text-3xl font-bold underline">Main</h2>

			<PillList data={Data} />
		</Container>
	);
}