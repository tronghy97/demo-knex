
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {name: 'trong', age: '21', gender: 'male', role_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {name: 'tieu', age: '20', gender: 'male', role_id: 2, created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {name: 'cuong', age: '18', gender: 'female', role_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now()}
      ]);
    });
};
