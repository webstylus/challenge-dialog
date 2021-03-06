import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import { GraphQLSchema } from "graphql";
import http from "http";

import schema from "./schemas";

function registerLogMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.warn("operation:", request.body?.operationName);
  console.warn(request.body?.query);
  console.warn("variables:", request.body?.variables);
  next();
}
async function startApolloServer(schema: GraphQLSchema) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", registerLogMiddleware);
  server.applyMiddleware({ app, cors: true });

  await httpServer.listen({ port: 4000, path: "/graphql" }, () => {
    console.log(
      `Server is runing at http://localhost:4000${server.graphqlPath}`
    );
  });
}

startApolloServer(schema).then();
