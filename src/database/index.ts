import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "firstapi",
  database: "remtx",
  synchronize: true,
  logging: true,
  migrations: ["src/database/migrations/*.ts"],
  entities: [Category],
  subscribers: []
});

export function createConnection(host = "localhost"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;