"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = `
    extend type Query {
        getAllAdmins: [Admin]
    }

    extend type Mutation {
        createAdmin(input: AdminInput): Admin
        deleteAdmin(id: ID!): Boolean
        updateAdmin(id: ID!, input: AdminInput): Boolean
    }

    input AdminInput {
        mail_address: String,
        password: String,
        user_name: String,
    }

    type Admin {
        id: ID,
        mail_address: String,
        password: String,
        user_name: String,
        role: Role
    }
`;
//# sourceMappingURL=typeDef.js.map