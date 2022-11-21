import { AppDataSource } from "./data/data-sources/type-orm-data-source";
import server from "./server";

const port = process.env.PORT || '3000'

console.log("Starting server...");
AppDataSource.initialize().then(() => {
  console.log(`Server is running`);
  server.listen(port)
});
