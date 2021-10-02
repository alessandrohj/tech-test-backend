import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/users.js'



const app = express()

app.use(morgan('tiny'))
app.use(express.json())


//routes
app.use('/api/users', userRouter)

export default app