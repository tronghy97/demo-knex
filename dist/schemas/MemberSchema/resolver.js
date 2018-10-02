"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemberModel_1 = require("../../models/MemberModel");
exports.resolver = {
    Query: {
        getAllMembers: () => MemberModel_1.MemberModel.getAllMembers(),
    },
    Mutation: {
        createMember(root, { input }) {
            return MemberModel_1.MemberModel.createMember(input);
        },
        deleteMember(root, { id }) {
            return MemberModel_1.MemberModel.deleteMember(id);
        },
        updateMember(root, { id, input }) {
            if (id) {
                return MemberModel_1.MemberModel.updateMember(id, input);
            }
            return false;
        },
        insertMembers(root, { input }) {
            return MemberModel_1.MemberModel.insertMembers(input);
        }
    }
};
//# sourceMappingURL=resolver.js.map