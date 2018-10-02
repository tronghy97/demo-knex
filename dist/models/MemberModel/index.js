"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectors_1 = require("../../connectors");
const promise = require("bluebird");
class Member {
    getAllMembers() {
        return connectors_1.knex('members').select();
    }
    createMember(input) {
        if (input) {
            return connectors_1.knex('members').insert(input).then(function (result) {
                return connectors_1.knex('members').where('id', result[0]).first();
            });
        }
        return false;
    }
    deleteMember(id) {
        if (id) {
            return connectors_1.knex('members').where('id', id).del();
        }
        return false;
    }
    updateMember(id, input) {
        if (id) {
            return connectors_1.knex('members').where('id', id).update(input);
        }
        return false;
    }
    insertMembers(members) {
        return connectors_1.knex.transaction((trans) => {
            promise.map(members, (member) => {
                return connectors_1.knex.insert(member).into('members').transacting(trans);
            })
                .then(trans.commit)
                .catch(trans.rollback);
        })
            .then(function (inserts) {
            console.log(inserts.length);
        })
            .catch(function (error) {
            console.error(error);
            throw error;
        });
    }
}
exports.MemberModel = new Member();
//# sourceMappingURL=index.js.map