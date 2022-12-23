const express = require('express')
const router = express.Router()

const {createBook, getOneBook, getAllBook, deleteBook, updateBook,} = require('../controllers/books')

router.route('./book').get(getAllBook).post(createBook);
router.route('./book').get(getOneBook).patch(updateBook).delete(deleteBook);


module.exports = router