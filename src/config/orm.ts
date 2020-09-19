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
  entities: [path.resolve(__dirname, '..', 'domain', 'model', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migration', '*')],
};

module.exports = options;
