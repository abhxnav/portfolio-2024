import { env } from '@/env'
import { IConnectionObject } from '@/types'
import mongoose from 'mongoose'

const {
  mongodb: { uri },
} = env

const connection: IConnectionObject = {}

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log('Already connected to database')
    return
  }

  try {
    const db = await mongoose.connect(uri)
    connection.isConnected = db.connections[0].readyState

    console.log('Database connected successfully')
  } catch (error) {
    console.error('Error connecting to database: ', error)
    process.exit(1)
  }
}

export default dbConnect
