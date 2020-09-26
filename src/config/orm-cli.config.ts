import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: Boolean(process.env.TYPEORM_LOGGING),
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
  entities: [path.resolve(__dirname, '../domain/models/*')],
  migrations: [path.resolve(__dirname, '../db/migrations/*')],
  cli: {
    entitiesDir: path.resolve(__dirname, '../domain/models/*'),
    migrationsDir: path.resolve(__dirname, '../db/migrations/*'),
  },
};

module.exports = options;
