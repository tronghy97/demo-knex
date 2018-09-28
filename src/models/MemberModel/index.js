const knex = require('../../connectors');

module.exports = {
    getAllMembers: () => knex('tbl_members').select(),
    createMember: input => {
        if (input) {
            return knex('tbl_members').insert(input).then(function(result) {
                return knex('tbl_members').where('id', result[0]).first();
            });
        }
        return false;
    },
    deleteMember: id => {
        if (id) {
            return knex('tbl_members').where('id', id).update('deleted_at', new Date());
        }
        return false;
    },
    updateMember: (id, input) => {
        if (id) {
            return knex('tbl_members').where('id', id).update(input);
        }
        return false;
    }
}