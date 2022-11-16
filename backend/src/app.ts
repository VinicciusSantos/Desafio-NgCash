import { AppDataSource } from "./data-source";
import express from "express";
import cors from "cors";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use('/', (req, res) => res.send('hello'));

  return app.listen(process.env.port);
});
