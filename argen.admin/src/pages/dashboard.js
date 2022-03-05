import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
	<Card>
		<Title title="Bienvenido a la administracion" />
		<CardContent>Desde aca se van a poder editar las pastillas, podemos subir fotos tambien. Cualquier cosa me avisan :)</CardContent>
	</Card>
);
