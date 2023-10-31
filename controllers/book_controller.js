const Book = require('../model/books');

//controller to add book
exports.addBook = async (req, res, next) => {
    try {
        const { title, author, summary } = req.body;

        const newBook = new Book({
            title: title,
            author: author,
            summary: summary
        });

        await newBook.save();

        res.status(201).json({
            message: "book added successfully!",
            book: newBook
        })
        ;
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "failed to add the book!" });
    }
};


//controller to  get specific book by book_id or get list of all books
exports.getBook = async (req, res, next) => {
    try {
        if (req.query.id) {
            const book = await Book.findById(req.query.id);

            if (!book) {
                return res.status(404).json({ message: "book not found!" });
            }

            return res.status(200).json({message:"success",book});
        } else {
            const books = await Book.find();
            res.status(201).json({message:"success",books});
        }
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ message: "failed to get book/book list!" });
    }
};


//controller to update book details
exports.updateBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const { title, author, summary } = req.body;

        const existingBook = await Book.findById(bookId);
        if (!existingBook) {
            return res.status(404).json({ message: "book not found!" });
        }

        existingBook.title = title || existingBook.title;
        existingBook.author = author || existingBook.author;
        existingBook.summary = summary || existingBook.summary;

        const updatedBook = await existingBook.save();

        res.status(201).json({message:"book update successfully!", updatedBook});
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "failed to update the book" });
    }
};


//controller to delete book
exports.deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;

        const existingBook = await Book.findById(bookId);
        if (!existingBook) {
            return res.status(404).json({ message: "book not found!" });
        }

        await existingBook.deleteOne();

        res.status(201).send({message:"book deleted successfully!"});
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "failed to delete the book" });
    }
};

