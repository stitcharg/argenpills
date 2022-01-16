import React from "react";

import { Badge, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export default function Pill(data) {
	const warning = data.warning;

	return (
		<Card className="pill">
			<Card.Img variant="top" src={data.image} />
			<Card.Body>
				<Card.Title>{data.name} {data.color}
					{warning === "danger" &&
						<Badge bg="danger">Danger</Badge>
					}

					{warning === "warning" &&
						<Badge bg="warning">Warning</Badge>
					}

				</Card.Title>
				<Card.Subtitle>{data.date}</Card.Subtitle>

				<ListGroup variant="flush">
					<ListGroup.Item>Carga: {data.load}</ListGroup.Item>
				</ListGroup>

				{data.lab != null &&
					<Card.Link href={data.lab}>Laboratory test</Card.Link>
				}

			</Card.Body>

			<Card.Footer>
				<Button variant="primary" size="sm" href={data.ap}>Visit Forum</Button>
			</Card.Footer>
		</Card>
	);
}