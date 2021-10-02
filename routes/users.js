import express from "express";
import { users } from '../data/data.js'
import randomNumberGenerator from '../middleware/random.js'

const router = express.Router()


router.use('/', randomNumberGenerator)
router.get('/', async (req, res) => res.send({data: users}))

export default router