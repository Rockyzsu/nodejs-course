const { ApolloServer } = require("apollo-server");
const requireText = require("require-text");
const typeDefs = requireText("./schema.graphql",require);

const messages_list = [
  { id: 0, author: "King", text: "This is line 1" },
  { id: 2, author: "King", text: "This is line 2" },
  { id: 3, author: "King", text: "This is line 3" },
  { id: 4, author: "DT", text: "This is line 4" },
  { id: 5, author: "King", text: "This is line 5" },
  { id: 6, author: "Kate", text: "This is line 6" },
  { id: 7, author: "King", text: "This is line 7" },
  { id: 8, author: "King", text: "This is line 8" },
  { id: 9, author: "RR", text: "This is line 9" },
  { id: 10, author: "JJ", text: "This is line 10" },
  { id: 11, author: "King", text: "This is line 11" },
  { id: 12, author: "King", text: "This is line 12" },
  { id: 13, author: "King", text: "This is line 13" },
  { id: 14, author: "King", text: "This is line 14" },
  { id: 15, author: "King", text: "This is line 15" },
  { id: 16, author: "King", text: "This is line 16" },
  { id: 17, author: "King", text: "This is line 17" },
  { id: 18, author: "King", text: "This is line 18" },
  { id: 19, author: "Towns", text: "This is line 19" },
  { id: 20, author: "DD", text: "This is line 20" },
];

const resolvers = {
  Query: { messages: () => messages_list },
  Mutation: {
    addMessage: (parent, message) => {
      const item = { id: messages_list.length + 1, ...message };
      messages_list.push(item);
      return item;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 5000 }).then(() => {
  console.log("server start listen port 5000");
});
