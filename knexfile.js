module.exports = {
      development: {
      client: 'mysql',
      connection: {
        database: 'graphql',
        user:     'root',
        password: '01685394030',
        host: 'localhost',
        port: 3306
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
