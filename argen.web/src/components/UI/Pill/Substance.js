import React from "react";
import { ListGroup } from "react-bootstrap";

export default function PillSubstance(props) {
	const substances = [
		{
			id: 1,
			desc: 'MDMA',
		},
		{
			id: 2,
			desc: 'Catinona',
		}
	]

	if (props.substance) {
		return (
			<ListGroup.Item>Sustancia: {substances[props.substance].desc}</ListGroup.Item>
		);
	} else return null;
}

