import { AppDataSource } from "./data/data-source";
import express from "express";
import cors from "cors";

export const app = express();

AppDataSource.initialize().then(() => {
  app.use(express.json());
  app.use(cors());
  app.use("/", (req, res) => res.send("hello"));

  return app.listen(process.env.port);
});
