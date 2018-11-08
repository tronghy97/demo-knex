export const typeDef = `
    extend type Query {
        
    }

    extend type Mutation {
        createRole(name: String): Member
    }
    type Role {
        id: ID,
        name: String
    }
`;