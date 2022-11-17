import { AppDataSource } from "./data/data-sources/type-orm-data-source";
import { router } from "./presentation/routers";
import server from "./server"; 

const port = process.env.port || '3000'

console.log('Starting server...')
AppDataSource.initialize().then(() => {
  server.use("/", router)
  console.log(`Server running in port: ${port}`)
  return server.listen(port);
});
