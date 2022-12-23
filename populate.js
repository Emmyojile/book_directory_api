require('dotenv').config()

const books = require('./books.json')
const connectDB = require('./db/connect')
const Book = require('./model/books')

const start = async () => {
    try {
        await connectDB(process.env.mongo_uri)
        await Book.create(books)
        console.log("Done !!!")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()