import React from 'react'
import CIcon from '@coreui/icons-react'
import {
	cilBell,
	cilCalculator,
	cilChartPie,
	cilCursor,
	cilSmile,
	cilNotes,
	cilPencil,
	cilPuzzle,
	cilSpeedometer,
	cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
	{
		component: CNavItem,
		name: 'Dashboard',
		to: '/dashboard',
		icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
	},
	{
		component: CNavTitle,
		name: 'Administration',
	},
	{
		component: CNavItem,
		name: 'Pills',
		to: '/pills',
		icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
	},
]

export default _nav
