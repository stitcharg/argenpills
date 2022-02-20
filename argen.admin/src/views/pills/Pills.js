import React from 'react'
import {
	CCol,
	CRow,
	CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell
} from '@coreui/react'

import Edit from '../../components/datagrids/Edit'
import Delete from '../../components/datagrids/Delete'

const PillManagement = () => {
	return (
		<CRow>
			<CCol xs={12}><h1>Management</h1></CCol>

			<CCol xs={12}>
				<CTable>

					<CTableHead>

						<CTableRow>

							<CTableHeaderCell scope="col">#</CTableHeaderCell>

							<CTableHeaderCell scope="col">Nombre</CTableHeaderCell>

							<CTableHeaderCell scope="col">Color</CTableHeaderCell>

							<CTableHeaderCell scope="col">Sustancia</CTableHeaderCell>

						</CTableRow>

					</CTableHead>

					<CTableBody>

						<CTableRow>

							<CTableHeaderCell scope="row">1</CTableHeaderCell>

							<CTableDataCell>Mark</CTableDataCell>

							<CTableDataCell>Otto</CTableDataCell>

							<CTableDataCell><Edit /><Delete /></CTableDataCell>

						</CTableRow>

					</CTableBody>

				</CTable>
			</CCol>
		</CRow>
	)
}

export default PillManagement
