import express from 'express'
import { userData } from '../controllers/userData.js'

const userRouter = express.Router()

userRouter.get('/', userData)