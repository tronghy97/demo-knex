"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = `
    extend type Query {
        getAllMembers: [Member]
    }

    extend type Mutation {
        createMember(input: MemberInput): Member
        deleteMember(id: ID!): Boolean
        updateMember(id: ID!, input: MemberInput): Boolean
        insertMembers(input: [MemberInput]): [Member]
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
//# sourceMappingURL=typeDef.js.map