"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const MemberSchema_1 = require("./MemberSchema");
const AdminSchema_1 = require("./AdminSchema");
const RoleSchema_1 = require("./RoleSchema");
const DefaultSchema = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;
exports.typeDefs = [DefaultSchema, MemberSchema_1.typeDef, RoleSchema_1.typeDef, AdminSchema_1.typeDef];
exports.resolvers = lodash_1.merge(MemberSchema_1.resolver, AdminSchema_1.resolver);
//# sourceMappingURL=index.js.map