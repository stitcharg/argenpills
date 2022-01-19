const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

/*
app.use('/login', (req, res) => {
	res.send({
		token: 'test123'
	});
});*/

let answer = {
	error: false,
	code: 200,
	message: ''
};

//TODO keep filling info
let pillData = {
	name: '',
	color: ''
}

app.post('/pill', function (req, res) {
	if (!req.body.name || !req.body.color) {
		answer = {
			error: true,
			code: 502,
			message: 'Name y Color son requeridos'
		};
	} else {
		pillData = {
			name: req.body.name,
			color: req.body.color
		};
		answer = {
			error: false,
			code: 200,
			message: 'Pill created',
			respuesta: pillData
		};
	}

	console.log(req.body);

	res.send(answer);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));