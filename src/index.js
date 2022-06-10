const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginDrainHttpServer,
} = require("apollo-server-core");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const express = require("express");
const http = require("http");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const app = express();
const httpServer = http.createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const wsServer = new WebSocketServer({ server: httpServer, path: "/graphql" });
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  subscriptions: {
    onConnect: async (connectionParams, webSocket) => {
      console.log(connectionParams);
    },
  },
  plugins: [
    // ApolloServerPluginLandingPageGraphQLPlayground({ httpServer }),
    // ApolloServerPluginLandingPageGraphQLPlayground(),
    ApolloServerPluginDrainHttpServer({ httpServer }),

    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });
})();

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
