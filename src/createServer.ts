import { GraphQLServer } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import { PostResolver } from './resolvers/posts-resolver';

async function createServer() {
  const schema = await buildSchema({
    resolvers: [PostResolver]
  });
  return new GraphQLServer({
    schema
  });
}

export default createServer;
