
exports.up = function(knex, Promise) {
    return knex.schema.createTable('persons', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.string('age').notNull();
        table.string('gender').notNull();
        table.integer('role_id').unsigned();
        table.foreign('role_id').references('roles.id');
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('persons');
};
