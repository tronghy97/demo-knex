const knex = require('../../connectors');
const promise = require('bluebird');

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
    },
    insertMembers: members => {
        knex.transaction((trans) => {
            promise.map(members, (member) => {
                return knex.insert(member).into('members').transacting(trans);
            })
            .then(trans.commit)
            .catch(trans.rollback);
          })
          .then(function(inserts) {
            console.log(inserts.length);
          })
          .catch(function(error) {
            console.error(error);
            throw error;
          });
    },
}