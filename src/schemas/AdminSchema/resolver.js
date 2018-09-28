const AdminModel = require('../../models/AdminModel');

module.exports = {
    Query: {
        getAllAdmins: () => AdminModel.getAllAdmins(),
    },
    Mutation: {
        createAdmin(root, { input}) {
            return AdminModel.createAdmin(input);
        },
        deleteAdmin(root, { id }) {
            return AdminModel.deleteAdmin(id);
        },
        updateAdmin(root, { id, input }) {
            if (id) {
                return AdminModel.updateAdmin(id, input);
            }
            return false;
        }
    }
}
