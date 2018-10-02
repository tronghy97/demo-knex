
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'Admin', created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {name: 'User', created_at: knex.fn.now(), updated_at: knex.fn.now()},
      ]);
    });
};
