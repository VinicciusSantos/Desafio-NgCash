import express from "express"
import { router as accountsRouter } from './accounts-router'
import { router as transactionsRoutes } from './transactions-router'
import { router as usersRoutes } from './users-router'

export const router = express.Router();

router.use("/accounts", accountsRouter)
router.use("/transactions", transactionsRoutes)
router.use("/users", usersRoutes)