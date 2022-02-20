import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Administration
const PillManagement = React.lazy(() => import('./views/pills/Pills'))
const EditPill = React.lazy(() => import('./views/pills/EditPill'))

const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/pills/edit/:id', exact: true, name: 'EditPill', component: EditPill },
	{ path: '/pills', name: 'Pills', component: PillManagement }
]

export default routes
