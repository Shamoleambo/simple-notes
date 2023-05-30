import express from 'express'
import dotenv from 'dotenv'
import notesRoutes from './routes/notesRoutes.js'
import connectDB from './config/db.js'
import { allowCors } from './middleware/allowCors.js'

const server = express()
dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000

server.use(allowCors)

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/', notesRoutes)

server.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})
