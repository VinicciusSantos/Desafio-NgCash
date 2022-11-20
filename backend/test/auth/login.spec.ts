import { AppDataSource } from "../../src/data/data-sources/type-orm-data-source";
import server from "../../src/server";
import request from "supertest";
const uuid = require("uuid").v4;

let user: any = {
    "username": String(uuid()).substring(0, 8),
    "password": "Senha12345"
};
    
describe("/auth/login Tests", () => {
  jest.setTimeout(60000);
  beforeAll(async () => {
    await AppDataSource.initialize();
    await createUser(user.username, user.password)
  });

  it("should login", async () => {
    const response = await request(server)
        .post("/auth/login")
        .send(user);
    expect(response.status).toBe(200)
  });

  it("should not login with wrong credentials", async () => {
    const response = await request(server)
    .post("/auth/login")
    .send({
        username: user.username,
        password: uuid(),
    });
    expect(response.status).toBe(400)
  });

  it("should not login with a invalid user", async () => {
    const response = await request(server)
    .post("/auth/login")
    .send({
        username: uuid(),
        password: uuid(),
    });
    expect(response.status).toBe(400)
  });

  it("should return a token", async () => {});
});

async function createUser(username: string, password: string) {
  return request(server).post("/auth/register").send({
    username: username,
    password: password,
  });
}
