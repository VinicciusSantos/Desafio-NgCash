import { AppDataSource } from "./data/data-sources/type-orm-data-source";

console.log("Starting server...");
AppDataSource.initialize().then(() => {
  console.log(`Server is running`);
});
