const config = require('../constants/Config');
const database = require('../database/knexfile.js');

const knex = require('knex')(database[config.evironment]);

module.exports = knex

