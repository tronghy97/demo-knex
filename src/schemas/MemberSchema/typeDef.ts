export const typeDef = `
    extend type Query {
        getAllMembers: [Member]
    }

    extend type Mutation {
        createMember(input: MemberInput): Member
        deleteMember(id: ID!): Boolean
        updateMember(id: ID!, input: MemberInput): Boolean
        insertMembers(input: [MemberInput]): Boolean
    }

    input MemberInput {
        login_id: String,
        nickname: String,
    }

    type Member {
        id: ID,
        login_id: String,
        nickname: String,
    }
`;