import { knex } from '../connectors';
import * as promise from 'bluebird';

var bookshelf = require('bookshelf')(knex);
var Persons = bookshelf.Model.extend({
    tableName: 'persons',
    role: function() {
        return this.belongsTo(Role);
    }
});

var Role = bookshelf.Model.extend({
    tableName: 'roles'
});

class Person {
    getAllPersons() {
        // return knex().select('*').from('persons').join('roles', 'persons.role_id', '=', 'roles.id');
        return Persons.fetchAll({withRelated: ['role']}).then(function(models) {
            return models.serialize();
        });
    }

    findPerson(id: number) {
        if(id){
            return knex('persons').where('id', id).select().first();
        }
        return null;
    }

    updatePerson(id: number, input: Object) {
        if (id) {
            return knex('persons').where('id', id).update(input).then(function () {
                return knex('persons').where('id', id).select().first();
            })
        }
        return null;
    }

    createPerson(input: Object) {
        if (input) {
            return knex('persons').insert(input).then(function (result) {
                return knex('persons').where('id', result[0]).first();
            });
        }
        return null;
    }

    insertPersons(persons: Object[]) {
        return knex.transaction((trans) => {
            promise.map(persons, (person) => {
                return knex.insert(person).into('persons').transacting(trans);
            })
                .then(trans.commit)
                .catch(trans.rollback);
        })
            .then(function (inserts) {
                console.log(inserts.length);
            })
            .catch(function (error) {
                console.log("rollback db");
                console.error(error);
                return false;
            });
    }

}
export const PersonModel = new Person();