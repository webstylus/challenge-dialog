import 'graphql-import-node';
import { resolvers } from '../resolvers';
import * as typeDefs from './schema.graphql';

import { makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
