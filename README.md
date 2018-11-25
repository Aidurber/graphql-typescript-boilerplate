# GraphQL Typescript Boilerplate

I've been playing around with various GraphQL boilerplates like Vesper, rolled my own with [Prisma](https://github.com/prisma/prisma), built on NestJS. I either found them too opinionated, or too verbose. I liked what [Vesper](https://github.com/vesper-framework/vesper) and [NestJS](https://github.com/nestjs/nest) offered but found them having a lot of duplication.\*

This is based on:

- [TypeORM](https://github.com/typeorm/typeorm)
- [Type-GraphQL](https://github.com/19majkel94/type-graphql)

I write entities as I normally would in TypeORM and use Type-GraphQL to emit the GraphQL schema from those entities.

Perfect for getting up and running quickly.

This is a barebones boilerplate that I'll be using to test out ideas quickly.

**N.B**: I have nothing against Vesper, Nest, or Prisma (as a backend), I'm especially fond of Prisma but most times it's a little overkill.


## Usage
```bash
git clone https://github.com/Aidurber/graphql-typescript-boilerplate.git --depth=1 <projectname>
```
Rename <projectname> to your projects' name.
