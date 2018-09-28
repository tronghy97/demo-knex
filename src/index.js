const { GraphQLServer } = require('graphql-yoga')
const { typeDefs, resolvers } = require('./schemas')

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log('Server chatty is running ....'))
