import { ConnectionOptions } from 'typeorm';

const PROD_ENV = 'production';
const db =
  process.env.NODE_ENV === 'development'
    ? process.env.DATABASE_URL
    : 'postgres://user:password@localhost:35000/db';

const connectionOptions: ConnectionOptions[] = [
  {
    type: 'postgres',
    url: db,
    entities: ['dist/**/**.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
    migrations: ['dist/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    dropSchema: false,
    migrationsRun: false,
    logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'advanced-console',
  },
  {
    name: 'seed',
    type: 'postgres',
    url: db,
    entities: ['dist/**/**.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
    migrations: ['dist/seeds/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/seeds',
    },
    dropSchema: false,
    migrationsRun: false,
    logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'advanced-console',
  },
];

export = connectionOptions;
