import React from 'react'
import CIcon from '@coreui/icons-react';
import { cilPencil } from '@coreui/icons';
import { Link } from 'react-router-dom';

const Edit = () => {
	return (
		<Link to="/pills/edit/1">
			<CIcon className='gridEdit' icon={cilPencil} /></Link>
	);
}

export default Edit