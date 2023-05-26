import mongoose from 'mongoose'

export default async function connectDB() {
  const conn = await mongoose.connect(process.env.DB_URI)
  console.log(`Connected to the database - host: ${conn.connection.host}`)
}
