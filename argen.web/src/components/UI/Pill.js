import React from "react";

import { Button, Card, ListGroup } from "react-bootstrap";

import PillSubstance from "./Pill/Substance";
import PillLoad from "./Pill/Load";
import PillBadge from "./Pill/PillBadge";

import dayjs from 'dayjs';

import TestImageModal from './Modal';

require('dayjs/locale/es');
dayjs.locale('es');

export default function Pill(data) {
	const parsedDate = dayjs(data.date, 'es', true).format('DD-MMMM-YYYY');

	//console.log("Pill Data", data);
	return (
		<Card className="pill">
			<Card.Img variant="top" src={data.image} className="img-fluid" />
			<Card.Body>
				<Card.Title>{data.name} {data.color}
					<PillBadge warning={data.warning}></PillBadge>
				</Card.Title>
				<Card.Subtitle className="date">{parsedDate}</Card.Subtitle>


				<ListGroup variant="flush">
					<PillSubstance substance={data.substance}></PillSubstance>
					<PillLoad load={data.load} />
				</ListGroup>

				{data.lab != null &&
					<Card.Link href={data.lab}>Test de Laboratorio</Card.Link>
				}

			</Card.Body>

			<Card.Footer>
				<Button variant="primary" size="sm" href={data.ap}>Visitar ArgenPills</Button>

				<TestImageModal lab_image_url={data.lab_image_url} />
			</Card.Footer>
		</Card>
	);
}