import { AccountsController } from '../controllers/accounts-controller';
import express from 'express';

export const router = express.Router()

router.get('/',  new AccountsController().getAllAccounts)
router.post('/', new AccountsController().createAccount)

    