import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "firstapi",
  database: "remtx",
  synchronize: true,
  logging: true,
  migrations: ["./src/database/migrations/*.ts"],
  entities: [],
  subscribers: []
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;