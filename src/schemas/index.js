const { merge } = require('lodash');

const {
    typeDef: Member,
    resolver: MemberResolver
} = require('./MemberSchema');

const {
    typeDef: Admin,
    resolver: AdminResolver
} = require('./AdminSchema');

const {
    typeDef: Role
} = require('./RoleSchema');

const DefaultSchema = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

module.exports = {
    typeDefs: [DefaultSchema, Member, Role, Admin],
    resolvers: merge(MemberResolver, AdminResolver)
};