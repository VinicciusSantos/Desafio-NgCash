import { AppDataSource } from "./data/data-sources/type-orm-data-source";
import UsersRouter from "./presentation/routers/users-router";
import server from "./server"; 

AppDataSource.initialize().then(() => {
  const UsersMiddleware = UsersRouter();
  server.use("/users", UsersMiddleware)

  return server.listen(process.env.port);
});
