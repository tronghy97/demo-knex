const { MYSQL_PORT } = require('../constants/Config');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        port: MYSQL_PORT,
        user : 'root',
        password : 'root',
        database : 'chatty'
    }
});

module.exports = knex

