import { DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

const port = process.env.PGPORT as number | any;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: port,
  username: process.env.PGUSER,
  password: `${process.env.PGPASSWORD}`,
  database: process.env.PGDATABASE,
  entities: [`**/entities/*.{ts,js}`],
  migrations: [`**/migrations/*.{ts,js}`],
  migrationsRun: true
});
