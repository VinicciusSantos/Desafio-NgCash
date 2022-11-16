import express, { Request, Response } from 'express';
import { CreateUserUseCase } from '../../domain/interfaces/use-cases/users/create-user'
import { GetAllUsersUseCase } from '../../domain/interfaces/use-cases/users/get-all-users'


export default function UsersRouter(
    getAllUsersUseCase: GetAllUsersUseCase,
    createUserUseCase: CreateUserUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const Users = await getAllUsersUseCase.execute()
            res.send(Users)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createUserUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}