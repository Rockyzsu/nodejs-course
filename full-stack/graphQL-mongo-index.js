// 加入mongodb

const express = require('express')
const {
    ApolloServer,
    gql
} = require('apollo-server-express')

require('dotenv').config()
var db = require('./mongodb')
const models = require('./notes')

const port = process.env.PORT || 7000

MONGODB_URI_AUTH = process.env.MONGODB_URI_AUTH

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

type Mutation{
newNote(content:String!):Note!
}
`



const resolvers = {
    Query: {
        hello: () => "Hello World",
        notes: async () => {
            return await models.find()
        },
        note: async (parent, args) => {
            return await models.findById(args.id);
        }
    },
    Mutation:{
        newNote:async (parent,args)=>{
            return await models.create({
                content:args.content,
                author:"Harden",
            })
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

db.connect(MONGODB_URI_AUTH)

app.listen({
    port
}, () => {
    console.log('graphQL is running')
})
