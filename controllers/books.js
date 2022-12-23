const Books = require('../models/products')
const {StatusCodes} = require('')

exports.createBook = async (res, req) => {
    try {
        const {book_title, price, author} = req.body

        if(!(book_title || price || author)) {
            return res.status()
        }
    } catch (error) {
        
    }
}

exports.getOneBook = async (res, req) => {
    
}

exports.getAllBook = async (res, req) => {

}

exports.updateBook = async (res, req) => {
    
}

exports.deleteBook = async (res, req) => {
    
}