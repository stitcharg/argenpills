var config = require('./config/config');

const Pool = require('pg').Pool
const pool = new Pool({
	user: config.postgress.user,
	host: config.postgress.host,
	database: config.postgress.database,
	password: config.postgress.password,
	port: config.postgress.port,
})

module.exports = {
	pool
}