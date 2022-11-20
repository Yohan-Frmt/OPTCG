import { DataSource, DataSourceOptions } from "typeorm";

const PROD_ENV = "production";
const db =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_URL
    : "postgres://user:password@localhost:35000/db";

const connectionOptions: DataSourceOptions = {
  type: "postgres",
  url: db,
  entities: ["dist/**/*.entity{.ts,.js}"],
  relationLoadStrategy: "query",
  synchronize: false,
  logging: true,
  migrations: ["dist/migrations/*{.ts,.js}"],
  cache: {
    type: "database",
    tableName: "query-cache",
    duration: 3000
  },
  dropSchema: false,
  migrationsRun: false,
  logger: process.env.NODE_ENV === PROD_ENV ? "file" : "advanced-console"
};
export const dataSourceMain = new DataSource(connectionOptions);
