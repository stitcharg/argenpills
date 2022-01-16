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

	const handleSubmit = (event) => {
		console.log("Submit");
		const form = event.currentTarget

		if (form.checkValidity() === false) {

			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
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

							<CFormInput type="text" id="name" placeholder="Tesla" required />
						</CCol>

						<CCol xs={6}>
							<CFormLabel htmlFor="date">Fecha</CFormLabel>


							<CFormInput type="date" id="date" required /></CCol>

						<CCol xs={6}>
							<CFormLabel htmlFor="color">Color</CFormLabel>

							<CFormInput type="text" id="color" required />
						</CCol>

						<CCol xs={6} >
							<CFormLabel htmlFor="substance">Sustancia sospechada</CFormLabel>

							<CFormSelect
								options={[
									'Elija sustancia',
									{ label: 'MD', value: '1' },
									{ label: 'Catinona', value: '2' },
									{ label: 'Desconocida', value: '0' }
								]}
							/></CCol>


						<CCol xs={6}>

							<CFormLabel htmlFor="image">Foto pastilla</CFormLabel>

							<CFormInput type="file" id="image" /></CCol>

						<CCol xs={4}>
							<CFormLabel htmlFor="load">Carga</CFormLabel>

							<CFormSelect
								options={[
									'Elija la carga',
									{ label: 'Baja', value: '1' },
									{ label: 'Media', value: '2' },
									{ label: 'Alta', value: '3' },
									{ label: 'Desconocida', value: '0' }
								]}
							/></CCol>

						<CCol xs={2} style={{ paddingTop: '35px' }}>
							<CFormCheck id="test" label="Tiene test" />
						</CCol>

						<CCol xs={6}>

							<CFormLabel htmlFor="imagemarquis">Foto del Marquis/Mandelin</CFormLabel>

							<CFormInput type="file" id="imagemarquis" /></CCol>

						<CCol xs={12}>
							<CFormLabel htmlFor="link_lab">Link al analisis (si tiene)</CFormLabel>


							<CFormInput type="text" id="link_lab" /></CCol>

						<CCol xs={12}>
							<CFormLabel htmlFor="link_ap">Link del foro</CFormLabel>


							<CFormInput type="text" id="link_ap" required /></CCol>

						<CCol xs={12} style={{ paddingTop: '20px' }}>
							<CFormCheck id="publish" label="Publicar" checked></CFormCheck>
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
