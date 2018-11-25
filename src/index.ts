require('dotenv').config();
import 'reflect-metadata';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';
import * as TypeGraphQL from 'type-graphql';
import createServer from './createServer';
import bootstrapDatabase from './db';

TypeGraphQL.useContainer(Container);
TypeORM.useContainer(Container);

async function bootstrap() {
  const db = await bootstrapDatabase();

  const server = await createServer(db);
  server.start({}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  });
}

bootstrap();
