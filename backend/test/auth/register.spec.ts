import request from "supertest";
import { AppDataSource } from "../../src/data/data-sources/type-orm-data-source";
import server from "../../src/server";
const uuid = require('uuid').v4

describe("/auth/register Tests", () => {
  jest.setTimeout(60000)
  beforeAll(async () => {
    await AppDataSource.initialize();
  })

  it("should create a user", async () => {
    const response = await createUser(String(uuid()).substring(0,8), "Senha12345");
    expect(response.status).toBe(201)
  });

  it("should create a account to user", async () => {});

  it("should create a account to user with balance of R$100,00", async () => {});

  describe("username validations", () => {
    it("should not create a user with a username thats already exists", async () => {
      let username = String(uuid()).substring(0,8)
      await createUser(username, "Senha12345");
      const response = await createUser(username, "Senha12345");
      expect(response.status).toBe(400)
    });

    it("should not create a user when the username has less than 3 characters", async () => {
      const response = await createUser(String(uuid()).substring(0,2), "Senha12345");
      expect(response.status).toBe(400)
    });
  });

  describe("password validations", () => {
    it("should not create a user when password is smaller than 8 characters", async () => {
      const response = await createUser(String(uuid()).substring(0,8), "Test1");
      expect(response.status).toBe(400)
    });

    it("should not create a user if password does not have a number ", async () => {
      const response = await createUser(String(uuid()).substring(0,8), "TestPassword");
      expect(response.status).toBe(400)
    });

    it("should not create a user if password does not have a uppercase letter ", async () => {
      const response = await createUser(String(uuid()).substring(0,8), "testpassword123");
      expect(response.status).toBe(400)
    });
  });
});

async function createUser(username: string, password: string) {
  return request(server)
  .post("/auth/register")
  .send({
    "username": username,
    "password": password
  });
}
