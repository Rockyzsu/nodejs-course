const express = require('express')
const {
    ApolloServer,
    gql
} = require('apollo-server-express')

const port = process.env.PORT || 7000

const typeDefs = gql `
type Query {
hello:String
}
`

const resolvers = {
    Query: {
        hello: () => "Hello World"

    }
}

const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers
})
server.applyMiddleware({
    app,
    path: '/api'
})


app.listen({
    port
}, () => {
    console.log('graphQL is running')
})
