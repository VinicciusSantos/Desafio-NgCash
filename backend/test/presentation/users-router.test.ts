import request from "supertest";
import { Users } from "./../../src/domain/entities/Users";
import { CreateUserUseCase } from "./../../src/domain/interfaces/use-cases/users/create-user";
import { GetAllUsersUseCase } from "./../../src/domain/interfaces/use-cases/users/get-all-users";
import UsersRouter from "../../src/presentation/routers/users-router";
import server from "../../src/server";

class MockGetAllUsersUseCase implements GetAllUsersUseCase {
  execute(): Promise<Users[]> {
    throw new Error("Method not implemented.");
  }
}

class MockCreateUserUseCase implements CreateUserUseCase {
  execute(Users: Users): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

describe("Users Router", () => {
  let mockCreateUserUseCase: CreateUserUseCase;
  let mockGetAllUsersUseCase: GetAllUsersUseCase;

  beforeAll(() => {
    mockGetAllUsersUseCase = new MockGetAllUsersUseCase();
    mockCreateUserUseCase = new MockCreateUserUseCase();
    server.use(
      "/Users",
      UsersRouter(mockGetAllUsersUseCase, mockCreateUserUseCase)
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /Users", () => {
    test("should return 200 with data", async () => {
      const ExpectedData = [
        { id: 1, username: "Test", password: "Test123", account: null },
      ];
      jest
        .spyOn(mockGetAllUsersUseCase, "execute")
        .mockImplementation(() => Promise.resolve(ExpectedData));

      const response = await request(server).get("/Users");

      expect(response.status).toBe(200);
      expect(mockGetAllUsersUseCase.execute).toBeCalledTimes(1);
      expect(response.body).toStrictEqual(ExpectedData);
    });

    test("GET /Users returns 500 on use case error", async () => {
      jest
        .spyOn(mockGetAllUsersUseCase, "execute")
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(server).get("/Users");
      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: "Error fetching data" });
    });
  });

  describe("POST /Users", () => {
    test("POST /Users", async () => {
      const InputData = {
        id: 1,
        username: "Test",
        password: "Test123",
        account: null,
      };
      jest
        .spyOn(mockCreateUserUseCase, "execute")
        .mockImplementation(() => Promise.resolve(true));
      const response = await request(server).post("/Users").send(InputData);
      expect(response.status).toBe(201);
    });

    test("POST /Users returns 500 on use case error", async () => {
      const InputData = {
        id: 1,
        username: "Test",
        password: "Test123",
        account: null,
      };
      jest
        .spyOn(mockCreateUserUseCase, "execute")
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(server).post("/Users").send(InputData);
      expect(response.status).toBe(500);
    });
  });
});
