var connection = require('./connection');

const getPills = (request, response) => {
	connection.pool.query('SELECT * FROM pills ORDER BY date DESC', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

module.exports = {
	getPills
}