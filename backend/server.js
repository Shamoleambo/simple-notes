import express from 'express'
import dotenv from 'dotenv'

const server = express()
dotenv.config()

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})
