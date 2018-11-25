import * as TypeORM from 'typeorm';
async function bootstrapDatabase() {
  return await TypeORM.createConnection();
}

export default bootstrapDatabase;
