"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = {
    development: {
        client: 'mysql',
        version: '5.7',
        connection: {
            host: '127.0.0.1',
            user: 'username',
            password: 'password',
            database: 'knex'
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
//# sourceMappingURL=knexfile.js.map