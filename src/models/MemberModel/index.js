const knex = require('../../connectors');

module.exports = {
    getAllMembers: () => knex('members').select(),
    createMember: input => {
        if (input) {
            return knex('members').insert(input).then(function(result) {
                return knex('members').where('id', result[0]).first();
            });
        }
        return false;
    },
    deleteMember: id => {
        if (id) {
            return knex('members').where('id', id).del();
        }
        return false;
    },
    updateMember: (id, input) => {
        if (id) {
            return knex('members').where('id', id).update(input);
        }
        return false;
    }
}