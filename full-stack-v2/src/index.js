const express = require("express");

const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
var db = require("./mongodb");
const models = require("./models");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const port = process.env.PORT || 7000;

MONGODB_URI_AUTH = process.env.MONGODB_URI_AUTH;

const app = express();
db.connect(MONGODB_URI_AUTH);

const server = new ApolloServer({typeDefs,resolvers,context: () => { return { models };},
});

server.applyMiddleware({app,path: "/api",});

app.listen(
  {port, },
  () => {
    console.log("graphQL is running");
  }
);
