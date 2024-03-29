const express = require('express')
const {
    ApolloServer,
    gql
} = require('apollo-server-express')
console.log(process.env.PORT)

const port = process.env.PORT || 7000

const typeDefs = gql`
type Note{
    id:ID!
    content:String!
    author:String!
}

type Query {
    hello:String
    notes:[Note!]!
    note(id:ID!):Note!
    }
`



let notes = [
    { id: '1', content: 'this is line 1 ', author: 'joe 1' },
    { id: '2', content: 'this is line 2 ', author: 'joe 2' },
    { id: '3', content: 'this is line 3 ', author: 'joe 3' },
]
const resolvers = {
    Query: {
        hello: () => "Hello World",
        notes: () => notes,
        note: (parent, args) => {
            return notes.find(note => note.id === args.id);
        }
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
