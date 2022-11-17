import { AppDataSource } from "./data/data-sources/type-orm-data-source";
import { router } from "./presentation/routers";
import server from "./server"; 

AppDataSource.initialize().then(() => {
  server.use("/", router)
  return server.listen(process.env.port || '3000');
});
