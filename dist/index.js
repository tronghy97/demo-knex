"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const schemas_1 = require("./schemas");
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: schemas_1.resolvers,
});
server.start(() => console.log('Server chatty is running ....'));
//# sourceMappingURL=index.js.map