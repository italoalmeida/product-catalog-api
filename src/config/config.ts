import * as path from 'path';

export const config = () => ({
  production: Boolean(process.env.PRODUCTION) || false,
  port: Number(process.env.PORT) || 3000,
  database: {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: Boolean(process.env.TYPEORM_LOGGING) || false,
    synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE) || false,
    entities: [path.resolve(__dirname, '../domain/models/*')],
    migrations: [path.resolve(__dirname, '../db/migrations/*')],
    cli: {
      entitiesDir: path.resolve(__dirname, '../domain/models/*'),
      migrationsDir: path.resolve(__dirname, '../db/migrations/*'),
    },
  },
  jwtSecret: process.env.JWT_SECRET,
});
