import express, { Request, Response } from 'express';
import { CreateTransactionUseCase } from '../../domain/interfaces/use-cases/transactions/create-transaction'
import { GetAllTransactionsUseCase } from '../../domain/interfaces/use-cases/transactions/get-all-transactions'


export default function TransactionsRouter(
    getAllTransactionsUseCase: GetAllTransactionsUseCase,
    createTransactionUseCase: CreateTransactionUseCase
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const Transactions = await getAllTransactionsUseCase.execute()
            res.send(Transactions)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createTransactionUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}