import express from 'express';
import { TransactionsController } from '../controllers/transactions-controller';

export const router = express.Router()

router.get('/', new TransactionsController().list)
router.post('/cash-out', new TransactionsController().cashOut)
