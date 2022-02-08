import React from "react";
import Pill
	from "./Pill";
import { Row, Col } from "react-bootstrap";

export default function PillList(props) {
	if (props.data) {
		return (
			<Row xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
				{props.data.map(pill => <Col xs key={pill.id}><Pill
					key={pill.id}
					name={pill.name}
					color={pill.color}
					date={pill.date}
					load={pill.load}
					image={pill.image}
					lab={pill.lab_url}
					ap={pill.ap_url}
					warning={pill.warning}
					substance={pill.substance}
				/></Col>)
				}
			</Row >
		);
	} else return null;
}
