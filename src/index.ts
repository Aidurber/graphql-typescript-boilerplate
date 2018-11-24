import 'reflect-metadata';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';
import * as TypeGraphQL from 'type-graphql';
import entities from './entities';
import createServer from './createServer';

TypeGraphQL.useContainer(Container);
TypeORM.useContainer(Container);

async function bootstrap() {
  await TypeORM.createConnection({
    type: 'mysql',
    database: 'type-graphql',
    username: 'root', // fill this with your username
    password: '', // and password
    port: 3306,
    host: 'localhost',
    entities,
    synchronize: true,
    logger: 'advanced-console',
    logging: 'all',
    dropSchema: true,
    cache: true
  });

  const server = await createServer();
  server.start({}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  });
}

bootstrap();
