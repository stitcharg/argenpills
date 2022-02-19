import React from "react";
import { ListGroup } from "react-bootstrap";
import { BsPatchExclamationFill } from "react-icons/bs";

export default function PillLoad(props) {
	const load = [
		{
			id: 0,
			desc: 'Desconocida'
		},
		{
			id: 1,
			desc: 'Baja',
		},
		{
			id: 2,
			desc: 'Media',
		},
		{
			id: 3,
			desc: "Alta"
		}
	]

	if (props.load != null) {
		return (
			<ListGroup.Item>Carga: {load[props.load].desc} <BsPatchExclamationFill /></ListGroup.Item>
		);
	} else return null;
}

