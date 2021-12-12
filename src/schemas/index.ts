import 'graphql-import-node';
import { resolvers } from '../resolvers';
import * as typeDefs from './schema.graphql';

import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;