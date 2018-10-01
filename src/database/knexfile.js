// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'root',
      password: 'root',
      host: '127.0.0.1',
      port: 8889
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

};
