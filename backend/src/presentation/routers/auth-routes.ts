
import express from 'express';
import { AuthController } from '../controllers/auth-controller';

export const router = express.Router()

router.post('/register', new AuthController().register)
router.post('/login', new AuthController().login)

    