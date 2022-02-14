import React, { Component, useState } from 'react'
import { Button, Modal, Image } from 'react-bootstrap';

export default function TestImageModal(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	console.log(props);

	if (props.lab_image_url == null) return null;

	return (
		<>
			<Button variant="success" onClick={handleShow} size="sm">
				Ver foto del test
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Test</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={props.lab_image_url}></Image>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
