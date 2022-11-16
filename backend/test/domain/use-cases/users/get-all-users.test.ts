import { Users } from "../../../../src/domain/entities/Users";
import { UsersRepository } from "../../../../src/domain/interfaces/repositories/users-repository";
import { GetAllUsers } from './../../../../src/domain/use-cases/users/get-all-users';

describe("Get All Userss Use Case", () => {

    class MockUsersRepository implements UsersRepository {
        createUser(Users: Users): Promise<boolean> {
            throw new Error("Method not implemented.");
        }
        getUsers(): Promise<Users[]> {
            throw new Error("Method not implemented.");
        }
    }
    let mockUsersRepository: UsersRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockUsersRepository = new MockUsersRepository()
    })

    test("should return data", async () => {
        const ExpectedResult = [{ id: 1, username: "Test", password: "Test123", account: null }]

        jest.spyOn(mockUsersRepository, "getUsers").mockImplementation(() => Promise.resolve(ExpectedResult))
        const getAllUsersUse = new GetAllUsers(mockUsersRepository)
        const result = await getAllUsersUse.execute();
        expect(result).toStrictEqual(ExpectedResult)

    });

})