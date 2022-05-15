import "reflect-metadata";
import express from "express";
import { createConnection } from "./database/index";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

import swaggerFile from './swagger.json';

import { router } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);


app.listen(3333, () => console.log("Server On!"));
