import express from 'express'
import { getAllInvestments } from '../controllers/investmentController.js'

const investmentRouter = express.Router()

investmentRouter.get('/', getAllInvestments)