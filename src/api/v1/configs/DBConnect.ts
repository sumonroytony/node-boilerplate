import mongoose, { Connection } from 'mongoose'

let mongooseConnection: Connection
export default async function DBconnect (): Promise<void> {
  try {
    mongoose.connection.on('connecting', () => {
      console.log('MongoDB: connecting.')
    })
    mongoose.connection.on('connected', () => {
      console.log('MongoDB: connected.')
    })
    mongoose.connection.on('disconnecting', () => {
      console.log('MongoDB: disconnecting.')
    })
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB: disconnected.')
    })

    if (
      mongoose.connection.readyState !== 1 &&
      mongoose.connection.readyState !== 2
    ) {
      const conn = await mongoose.connect(process.env.MONGO_URI as string, {
        autoIndex: true,
        serverSelectionTimeoutMS: 5000
      })
      mongooseConnection = conn.connection
    }
  } catch (error) {
    console.log('Error connecting to DB', error)
  }
}
