export const typeDef = `
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
        role_id: Int
    }

    type Admin {
        id: ID,
        mail_address: String,
        password: String,
        user_name: String,
        role: Role
    }
`;