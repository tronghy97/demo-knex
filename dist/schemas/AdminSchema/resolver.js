"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminModel_1 = require("../../models/AdminModel");
exports.resolver = {
    Query: {
        getAllAdmins: () => AdminModel_1.AdminModel.getAllAdmins(),
    },
    Mutation: {
        createAdmin(root, { input }) {
            return AdminModel_1.AdminModel.createAdmin(input);
        },
        deleteAdmin(root, { id }) {
            return AdminModel_1.AdminModel.deleteAdmin(id);
        },
        updateAdmin(root, { id, input }) {
            if (id) {
                return AdminModel_1.AdminModel.updateAdmin(id, input);
            }
            return false;
        }
    }
};
//# sourceMappingURL=resolver.js.map