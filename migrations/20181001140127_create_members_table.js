
exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', function (table) {
        table.increments('id');
        table.string('login_id').unique().notNull();
        table.string('nickname').notNull();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('members');
};
