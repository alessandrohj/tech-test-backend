import express from 'express'
import morgan from 'morgan'
// import peopleRouter from './routes/people.js'



const app = express()

app.use(morgan('tiny'))
app.use(express.json())


//routes
// app.use('/api/people', peopleRouter)

export default app