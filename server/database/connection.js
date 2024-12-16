const mongoose = require('mongoose')

module.exports = async () => {
  try {
    const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
