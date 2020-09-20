import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'product_catalog_dev',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'domain', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
  cli: {
    entitiesDir: path.resolve(__dirname, '..', 'domain', 'models', '*'),
    migrationsDir: path.resolve(__dirname, '..', 'db', 'migrations', '*'),
  },
};

module.exports = options;
