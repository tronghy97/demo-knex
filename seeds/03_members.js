
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {login_id: "a@gmail.com", nickname: "auser", created_at: knex.fn.now(), updated_at: knex.fn.now()},
        {login_id: "b@gmail.com", nickname: "buser", created_at: knex.fn.now(), updated_at: knex.fn.now()},
      ]);
    });
};
