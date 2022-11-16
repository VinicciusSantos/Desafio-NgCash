import { TransactionsController } from './../controllers/transactions-controller';
import express from 'express';

export const router = express.Router()

router.get('/', new TransactionsController().getAllTransactions)
router.post('/', new TransactionsController().createTransaction)
