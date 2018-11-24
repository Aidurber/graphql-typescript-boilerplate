import 'reflect-metadata';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';
import * as TypeGraphQL from 'type-graphql';
import createServer from './createServer';

TypeGraphQL.useContainer(Container);
TypeORM.useContainer(Container);

async function bootstrap() {
  await TypeORM.createConnection();

  const server = await createServer();
  server.start({}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  });
}

bootstrap();
