import express from "express";
import cors from "cors";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {}

  private routes(): void {
    this.express.get("/", (req, res) => {
      return res.send("hello");
    });
  }
}

export default new App().express;
