import express from "express";
import { users } from '../data/data.js'
// import randomId from '../middleware/random.js'

const router = express.Router()

// router.use('/', randomId)
router.get('/', async (req, res) => res.send({data: users}))

export default router