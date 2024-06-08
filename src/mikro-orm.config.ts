import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import * as path from 'path';

const mikroOrmConfig: Options = {
  port: parseInt(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'postgres',
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  entitiesTs: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  driver: PostgreSqlDriver,
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: path.join(__dirname, './migrations'),
  },
  discovery: {
    warnWhenNoEntities: true,
  },
  allowGlobalContext: true,
  debug: true,
  extensions: [Migrator],
};

export default mikroOrmConfig;
