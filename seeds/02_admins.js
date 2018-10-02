
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').truncate()
    .then(function () {
      return knex('roles').pluck('id').then((roleIds) => {
          var admins = [];
          for (let index = 0; index < 2; index++) {
              admins.push({
                mail_address: "a" + index + "@gmail.com",
                password: "123456",
                user_name: "a" + index + "user",
                role_id: roleIds[Math.floor(Math.random()*roleIds.length)],
                created_at: knex.fn.now(),
                updated_at: knex.fn.now()
              })
          }

          return knex('admins').insert(admins);
      });
    });
};
