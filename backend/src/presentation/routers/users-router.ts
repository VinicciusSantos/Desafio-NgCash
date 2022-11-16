import express from 'express';
import { UsersController } from '../controllers/users-controller';

export const router = express.Router()

router.get('/', new UsersController().getAllUsers)
router.post('/', new UsersController().createUser)