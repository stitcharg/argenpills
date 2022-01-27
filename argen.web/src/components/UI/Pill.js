import React from "react";

import { Badge, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import PillSubstance from "./Pill/Substance";
import dayjs from 'dayjs';

require('dayjs/locale/es');
dayjs.locale('es');

export default function Pill(data) {
	const warning = data.warning;	//if null, no warning, 1 = warning / 2 = danger

	const WARNING = 1;
	const DANGER = 2;

	const parsedDate = dayjs(data.date, 'es', true).format('DD-MMMM-YYYY');

	console.log("Pill Data", data);
	return (
		<Card className="pill">
			<Card.Img variant="top" src={data.image} />
			<Card.Body>
				<Card.Title>{data.name} {data.color}
					{warning === DANGER &&
						<Badge bg="danger">Peligrosa</Badge>
					}

					{warning === WARNING &&
						<Badge bg="warning">Cuidado</Badge>
					}

				</Card.Title>
				<Card.Subtitle className="date">{parsedDate}</Card.Subtitle>


				<ListGroup variant="flush">
					{data.load &&
						<ListGroup.Item>Carga: {data.load}</ListGroup.Item>
					}

					<PillSubstance substance={data.substance}></PillSubstance>
				</ListGroup>

				{data.lab != null &&
					<Card.Link href={data.lab}>Test de Laboratorio</Card.Link>
				}

			</Card.Body>

			<Card.Footer>
				<Button variant="primary" size="sm" href={data.ap}>Visitar ArgenPills</Button>
			</Card.Footer>
		</Card>
	);
}