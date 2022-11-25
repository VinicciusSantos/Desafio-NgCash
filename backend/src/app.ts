import { AppDataSource } from "./data/data-sources/type-orm-data-source";
import server from "./server";

console.log("Starting server...");
AppDataSource.initialize().then(() => {
  console.log(`Server is running in port :3050`);
  server.listen(5000)
});
