const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// bookSchema for Mongoose
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String,
        required: true
    }
});

// applying bookSchema to Book model
const Book = mongoose.model("Book", bookSchema);

// exporting Book model
module.exports = Book;