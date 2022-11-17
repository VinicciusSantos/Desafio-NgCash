import express from "express"
import { router as authRoutes } from './auth-routes'
import { router as transactionsRoutes } from './transactions-routes'

export const router = express.Router();

router.use("/auth", authRoutes)
router.use("/transactions", transactionsRoutes)