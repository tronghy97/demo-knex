import { knex } from '../connectors';
import * as promise from 'bluebird';

class Member {
    getAllMembers() {
        return knex('members').select();
    }

    createMember(input: object) {
        if (input) {
            return knex('members').insert(input).then(function(result) {
                return knex('members').where('id', result[0]).first();
            });
        }
        return false;
    }

    deleteMember(id: number) {
        if (id) {
            return knex('members').where('id', id).del();
        }
        return false;
    }

    updateMember(id: number, input: object) {
        if (id) {
            return knex('members').where('id', id).update(input);
        }
        return false;
    }

    insertMembers(members: object[]) {
        return knex.transaction((trans) => {
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
            console.log("rollback db");
            console.error(error);
            return false;
          });
    }
}


export const MemberModel = new Member();