import React from 'react'
import { useState } from 'react';
import {
	CButton,
	CCard,
	CCardBody,
	CFormSelect,
	CCol,
	CForm,
	CFormInput,
	CFormLabel,
	CFormCheck,
	CRow,
} from '@coreui/react'

const EditPill = (props) => {
	const id = props.match.params.id;

	const [validated, setValidated] = useState(false)
	const [data, setData] = useState([])
	const [formData, setFormData] = useState('')


	const fetchData = () => {
		fetch('http://localhost:8080/pill', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((result) => setData(result.rows))
			.catch((err) => console.log('error'))
	}

	const saveData = () => {
		fetch('http://localhost:8080/pill', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				pill: formData, // Use your own property name / key
			}),
		})
			.then((res) => res.json())
			.then((result) => setData(result.rows))
			.catch((err) => console.log('error'))
	}

	const handleSubmit = (event) => {
		const form = event.currentTarget

		//we'll never submit the form
		event.preventDefault()
		event.stopPropagation()

		if (form.checkValidity() === false) {

		} else {
			setValidated(true);

			saveData() // Save games when form is submitted	
		}
	}

	const handleChange = (event) => {
		//the checkbox has a different behavior
		var value = event.target.value;

		if (event.target.type === "checkbox")
			value = event.target.checked;

		setFormData({
			...formData,
			[event.target.id]: value
		})
		//setFormData(event.target.value)
	}

	return (
		<CRow>
			<CCol xs={12}>
				<h1>Edit information</h1>
			</CCol>
			<CCol xs={12}>
				ID #{id}
			</CCol>
			<CCol xs={12}>
				<CForm className="needs-validation" validated={validated} onSubmit={handleSubmit}>
					<CRow>
						<CCol xs={12}>
							<CFormLabel htmlFor="name">Nombre</CFormLabel>

							<CFormInput type="text" id="name" placeholder="Tesla" required onChange={handleChange} />
						</CCol>

						<CCol xs={6}>
							<CFormLabel htmlFor="date">Fecha</CFormLabel>


							<CFormInput type="date" id="date" required onChange={handleChange} /></CCol>

						<CCol xs={6}>
							<CFormLabel htmlFor="color">Color</CFormLabel>

							<CFormInput type="text" id="color" required onChange={handleChange} />
						</CCol>

						<CCol xs={6} >
							<CFormLabel htmlFor="substance">Sustancia sospechada</CFormLabel>

							<CFormSelect id="substance"
								options={[
									'Elija sustancia',
									{ label: 'MD', value: '1' },
									{ label: 'Catinona', value: '2' },
									{ label: 'Desconocida', value: '0' }
								]}
								onChange={handleChange} /></CCol>


						<CCol xs={6}>

							<CFormLabel htmlFor="image">URL Foto pastilla</CFormLabel>

							<CFormInput type="text" id="image" onChange={handleChange} /></CCol>

						<CCol xs={4}>
							<CFormLabel htmlFor="load">Carga</CFormLabel>

							<CFormSelect id="load"
								options={[
									'Elija la carga',
									{ label: 'Baja', value: '1' },
									{ label: 'Media', value: '2' },
									{ label: 'Alta', value: '3' },
									{ label: 'Desconocida', value: '0' }
								]}
								onChange={handleChange} /></CCol>

						<CCol xs={2} style={{ paddingTop: '35px' }}>
							<CFormCheck id="test" label="Tiene test" onChange={handleChange} />
						</CCol>

						<CCol xs={6}>

							<CFormLabel htmlFor="imagemarquis">URL Foto del Marquis/Mandelin</CFormLabel>

							<CFormInput type="text" id="imagemarquis" onChange={handleChange} /></CCol>

						<CCol xs={12}>
							<CFormLabel htmlFor="link_lab">Link al analisis (si tiene)</CFormLabel>


							<CFormInput type="text" id="link_lab" onChange={handleChange} /></CCol>

						<CCol xs={12}>
							<CFormLabel htmlFor="link_ap">Link del foro</CFormLabel>


							<CFormInput type="text" id="link_ap" required onChange={handleChange} /></CCol>

						<CCol xs={12} style={{ paddingTop: '20px' }}>
							<CFormCheck id="publish" label="Publicar" onChange={handleChange} ></CFormCheck>
						</CCol>

						<CCol xs={12}>
							<CButton id="submit" type="submit" title='Enviar'>Enviar</CButton>

						</CCol>

					</CRow>
				</CForm >
			</CCol >
		</CRow >
	)
}

export default EditPill
