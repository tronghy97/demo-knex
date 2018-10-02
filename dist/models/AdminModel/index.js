"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectors_1 = require("../../connectors");
var bookshelf = require('bookshelf')(connectors_1.knex);
var Admin = bookshelf.Model.extend({
    tableName: 'admins',
    role: function () {
        return this.belongsTo(Role);
    }
});
var Role = bookshelf.Model.extend({
    tableName: 'roles'
});
class AdminM {
    getAllAdmins() {
        return Admin.fetchAll({ withRelated: ['role'] }).then(function (models) {
            return models.serialize();
        });
    }
    createAdmin(input) {
        if (input) {
            return new Admin(input).save().then(function (model) {
                return model;
            });
        }
        return false;
    }
    deleteAdmin(id) {
        if (id) {
            return Admin.where('id', id).del();
        }
        return false;
    }
    updateAdmin(id, input) {
        if (id) {
            return Admin.where('id', id).set(input).save(null, { method: 'update' });
        }
        return false;
    }
}
exports.AdminModel = new AdminM();
//# sourceMappingURL=index.js.map