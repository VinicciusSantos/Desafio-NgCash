import { Users } from "../../../../src/domain/entities/Users";
import { UsersRepository } from "../../../../src/domain/interfaces/repositories/users-repository";
import { CreateUser } from '../../../../src/domain/use-cases/users/create-user';


describe("Create Contact Use Case", () => {
    class MockUsersRepository implements UsersRepository {
        createUser(user: Users): Promise<boolean> {
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

    test("should return true", async () => {
        const InputData = { id: 1, username: "Test", password: "Test123", account: null }

        jest.spyOn(mockUsersRepository, "createUser").mockImplementation(() => Promise.resolve(true))
        const createContactUseCase = new CreateUser(mockUsersRepository)
        const result = await createContactUseCase.execute(InputData);
        expect(result).toBe(true)
    });
})