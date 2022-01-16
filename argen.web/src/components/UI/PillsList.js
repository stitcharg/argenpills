import React from "react";
import Pill
	from "./Pil";
import { Row, Col } from "react-bootstrap";

export default function PillList(props) {
	return (
		<Row>
			{props.data.map(pill => <Col key={pill.id}><Pill
				key={pill.id}
				name={pill.name}
				color={pill.color}
				date={pill.date}
				load={pill.load}
				image={pill.image}
				lab={pill.lab_url}
				ap={pill.ap_url}
				danger={pill.danger}
				warning={pill.warning}
			/></Col>)
			}
		</Row >
	);
}
