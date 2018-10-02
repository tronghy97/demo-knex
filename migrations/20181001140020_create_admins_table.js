
exports.up = function(knex, Promise) {
    return knex.schema.createTable('admins', function (table) {
        table.increments('id');
        table.string('mail_address').unique().notNull();
        table.string('password').notNull();
        table.string('user_name');
        table.integer('role_id').unsigned().notNull();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admins');
};
