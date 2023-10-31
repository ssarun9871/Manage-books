const router = require('express').Router();

const {
    addBook,
    getBook,
    updateBook,
    deleteBook
} = require('../controllers/book_controller')

router.post('/add-book', addBook);

router.get('/get-book', getBook);

router.patch('/update-book/:id', updateBook);

router.delete('/delete-book/:id', deleteBook);

module.exports = router