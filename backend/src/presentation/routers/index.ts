import express from "express"
import { router as authRoutes } from './auth-routes'

export const router = express.Router();

router.use("/auth", authRoutes)