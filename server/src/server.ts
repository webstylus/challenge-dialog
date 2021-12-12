import { ApolloServer, Config } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express, { Request, Response, NextFunction } from 'express'
import http from 'http'
import schema from './schemas'

import cors from 'cors'

function registerLogMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.warn('operation:', request.body?.operationName)
  console.warn(request.body?.query)
  console.warn('variables:', request.body?.variables)
  next()
}
async function startApolloServer(schema:any) {
  const app = express()
  app.use(cors())
  app.use(express.json())

  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()

  app.use('/graphql', registerLogMiddleware)
  server.applyMiddleware({ app, cors: true })

  await httpServer.listen({ port: 4000, path: '/graphql' }, () => {
    console.log(
      `Server is runing at http://localhost:4000${server.graphqlPath}`
    )
  })
}

startApolloServer(schema).then()
