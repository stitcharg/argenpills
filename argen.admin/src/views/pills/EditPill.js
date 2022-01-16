import React from 'react'
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

	return (
		<CRow>
			<CCol xs={12}>
				<h1>Edit information</h1>
			</CCol>
			<CCol xs={12}>
				ID #{id}
			</CCol>
			<CCol xs={12}>
				<CForm>
					<CFormLabel htmlFor="name">Nombre</CFormLabel>

					<CFormInput type="text" id="name" placeholder="Tesla" />

					<CFormLabel htmlFor="date">Fecha</CFormLabel>

					<CFormInput type="date" id="date" />

					<CFormLabel htmlFor="color">Color</CFormLabel>

					<CFormInput type="text" id="color" />

					<CFormLabel htmlFor="foto">Foto</CFormLabel>

					<CFormInput type="file" id="foto" />

					<CFormLabel htmlFor="substance">Sustancia sospechada</CFormLabel>

					<CFormSelect
						options={[
							'Elija sustancia',
							{ label: 'MD', value: '1' },
							{ label: 'Catinona', value: '2' },
							{ label: 'Desconocida', value: '3' }
						]}
					/>

					<CFormCheck id="test" label="Tiene test" />

				</CForm>

			</CCol>
		</CRow>
	)
}

export default EditPill
