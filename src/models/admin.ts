import { knex } from '../connectors';

var bookshelf = require('bookshelf')(knex);
var Admin = bookshelf.Model.extend({
    tableName: 'admins',
    role: function() {
        return this.belongsTo(Role);
    }
});

var Role = bookshelf.Model.extend({
    tableName: 'roles'
});

class AdminM {
    getAllAdmins() {
        return Admin.fetchAll({withRelated: ['role']}).then(function(models) {
            return models.serialize();
        });
    }

    createAdmin(input: object) {
        if (input) {
            return new Admin(input).save().then(function(model) {
                return model;
            });
        }
        return false;
    }

    deleteAdmin(id: number) {
        if (id) {
            return Admin.where('id', id).destroy();
        }
        return false;
    }

    updateAdmin(id: number, input: object) {
        if (id) {
            return Admin.where('id', id).set(input).save(null, {method: 'update'});
        }
        return false;
    }
}

export const AdminModel = new AdminM()